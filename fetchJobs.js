const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const { format, subDays } = require('date-fns');

const JOB_URL = 'https://matchutd.github.io/uk-job-directory/';
const OUTPUT_PATH = './public/jobs.json';

const MATCH_KEYWORDS = [
  'erp', 'crm', 'hubspot', 'google ads', 'ppc', 'seo',
  'sales', 'negotiation', 'solution selling',
  'digital marketing', 'charity', 'partnerships'
];

const isRecent = (dateText) => {
  try {
    const yesterday = subDays(new Date(), 1);
    const posted = new Date(dateText);
    return posted >= yesterday;
  } catch {
    return false;
  }
};

(async () => {
  try {
    const { data } = await axios.get(JOB_URL);
    const $ = cheerio.load(data);

    const jobs = [];

    $('tr').each((_, row) => {
      const cols = $(row).find('td');
      if (cols.length < 6) return;

      const listType = $(cols[0]).text().trim();
      const title = $(cols[1]).text().trim();
      const link = $(cols[1]).find('a').attr('href') || '';
      const location = $(cols[2]).text().trim();
      const posted = $(cols[3]).text().trim();
      const score = parseInt($(cols[4]).text().trim()) || 0;
      const summary = $(cols[5]).text().trim();

      const match = MATCH_KEYWORDS.some(kw =>
        summary.toLowerCase().includes(kw)
      );

      if (match && isRecent(posted)) {
        jobs.push({ listType, title, link, location, posted, score, summary });
      }
    });

    fs.writeFileSync(OUTPUT_PATH, JSON.stringify(jobs, null, 2));
    console.log(`✅ Saved ${jobs.length} jobs to ${OUTPUT_PATH}`);
  } catch (err) {
    console.error('❌ Error fetching jobs:', err.message);
    process.exit(1);
  }
})();
