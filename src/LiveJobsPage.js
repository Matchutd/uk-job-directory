// src/LiveJobsPage.js
import React, { useEffect, useState } from "react";

const LiveJobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/uk-job-directory/jobs.json")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching jobs.json:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>✅ Live Job Feed</h2>
      {loading ? (
        <p>Loading jobs...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Posted</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.date}</td>
                <td>
                  <a href={job.link} target="_blank" rel="noreferrer">
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LiveJobsPage;


