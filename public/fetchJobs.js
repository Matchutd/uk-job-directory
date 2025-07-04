const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

async function fetchJobs() {
  const jobs = [];

  const response = await axios.get("https://www.reed.co.uk/jobs/marketing-jobs");
  const $ = cheerio.load(response.data);

  $(".job-result").each((i, el) => {
    const title = $(el).find(".job-title").text().trim();
    const company = $(el).find(".posted-by").text().trim();
    const location = $(el).find(".location").text().trim();
    const url = "https://www.reed.co.uk" + $(el).find(".job-title > a").attr("href");

    jobs.push({
      title,
      company,
      location,
      url,
      posted: new Date().toISOString().split("T")[0],
      score: Math.floor(Math.random() * 30 + 70), // placeholder
      summary: `${title} at ${company} in ${location}`,
    });
  });

  fs.writeFileSync("public/jobs.json", JSON.stringify(jobs, null, 2));
}

fetchJobs().catch(console.error);

