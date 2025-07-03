const fs = require('fs');
const path = require('path');

// Example job data (mocked for testing)
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
const outputPath = path.join(__dirname, 'jobs.json');
fs.writeFileSync(outputPath, JSON.stringify(jobs, null, 2));

console.log(`✅ Saved ${jobs.length} jobs to ${outputPath}`);
