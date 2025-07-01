import React, { useState } from 'react';
import './App.css';
import jobs from './jobs.js';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [isGridView, setIsGridView] = useState(false);

  const filteredJobs = jobs
    .filter((job) => {
      const term = searchTerm.toLowerCase();
      return (
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.location.toLowerCase().includes(term)
      );
    })
    .filter((job) => {
      return !remoteOnly || job.location.toLowerCase().includes('remote');
    })
    .sort((a, b) => b.matchScore - a.matchScore);

  return (
    <div className="app-container">
      <h1>Job Search Dashboard</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by keyword..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            checked={remoteOnly}
            onChange={() => setRemoteOnly(!remoteOnly)}
          />
          Remote only
        </label>

        <button onClick={() => setIsGridView(!isGridView)}>
          {isGridView ? 'List View' : 'Grid View'}
        </button>
      </div>

      <div className={isGridView ? 'job-grid' : 'job-list'}>
        {filteredJobs.map((job) => (
          <div key={job.id} className="job-card">
            <h2>{job.title}</h2>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Match Score:</strong> {job.matchScore}%</p>
            <a href={job.url} target="_blank" rel="noopener noreferrer">
              View job
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;







