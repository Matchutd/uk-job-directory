const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

async function fetchJobs() {
  const jobs = [];

  const response = await axios.get("https://www.adzuna.co.uk/jobs/marketing");
  const $ = cheerio.load(response.data);

  $(".job-result").each((i, el) => {
    const title = $(el).find(".job-title").text().trim();
    const company = $(el).find(".company").text().trim();
    const location = $(el).find(".location").text().trim();
    const url = "https://www.adzuna.co.uk" + $(el).find(".job-title > a").attr("href");

    if (title && url) {
      jobs.push({
        title,
        company,
        location,
        url,
        posted: new Date().toISOString().split("T")[0],
        score: Math.floor(Math.random() * 20 + 80), // temp relevance score
        summary: `${title} at ${company} in ${location}`,
      });
    }
  });

  fs.writeFileSync("public/jobs.json", JSON.stringify(jobs, null, 2));
  console.log(`✅ Saved ${jobs.length} jobs`);
}

fetchJobs().catch(console.error);
