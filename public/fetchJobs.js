const fs = require('fs');
const path = require('path');

// Hardcoded example jobs
const jobs = [
  {
    title: "Marketing Assistant",
    company: "SampleCorp",
    location: "London",
    url: "https://example.com/job/marketing",
    posted: new Date().toISOString().split('T')[0],
    score: 75,
    summary: "Marketing role with remote options and career growth"
  },
  {
    title: "Software Engineer",
    company: "TechDev Ltd",
    location: "Remote",
    url: "https://example.com/job/engineer",
    posted: new Date().toISOString().split('T')[0],
    score: 88,
    summary: "Developer role in a fast-growing startup"
  }
];

// Save to jobs.json
fs.writeFileSync(
  path.join(__dirname, 'jobs.json'),
  JSON.stringify(jobs, null, 2)
);

console.log(`✅ Saved ${jobs.length} jobs to ./public/jobs.json`);

