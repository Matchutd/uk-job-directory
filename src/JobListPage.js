import React, { useEffect, useState } from "react";
import "./JobListPage.css";

function JobListPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLiveJobs = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://matchutd.github.io/uk-job-directory/jobs.json");
      if (!response.ok) throw new Error("Failed to load jobs");
      const data = await response.json();
      setJobs(data.jobs || []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      alert("Unable to load live jobs.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="job-list-container">
      <h1>Job List Page</h1>

      <button className="load-button" onClick={fetchLiveJobs}>
        {loading ? "Loading..." : "Load Live Jobs"}
      </button>

      {jobs.length > 0 ? (
        jobs.map((job, idx) => (
          <div key={idx} className="job-card">
            <p><strong>Title:</strong> {job.title}</p>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.summary}</p>
          </div>
        ))
      ) : (
        <p style={{ color: "white", marginTop: "2rem" }}>
          No jobs loaded. Click the button above to fetch data.
        </p>
      )}
    </div>
  );
}

export default JobListPage;

