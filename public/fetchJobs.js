const fs = require('fs');
const path = require('path');

// Example job data
const jobs = [
  {
    title: "CRM Sales Executive",
    company: "Example Co",
    location: "Remote",
    link: "https://example.com/job/123",
    posted: new Date().toISOString().split('T')[0],
    score: 92,
    summary: "Matches ERP/CRM sales, remote, and key account experience"
  }
];

// Write to jobs.json
fs.writeFileSync(
  path.join(__dirname, 'jobs.json'),
  JSON.stringify(jobs, null, 2)
);

console.log("✅ Job data written to jobs.json");
