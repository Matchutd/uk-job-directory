import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import JobListPage from "./JobListPage";
import LiveJobsPage from "./LiveJobsPage"; // ✅ Ensure the filename matches

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>🏠 Home</Link>
        <Link to="/job-list" style={{ marginRight: "1rem" }}>📄 Job List</Link>
        <Link to="/live-jobs">📡 Live Job Feed</Link>
      </nav>

      {/* Page Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job-list" element={<JobListPage />} />
        <Route path="/live-jobs" element={<LiveJobsPage />} />
      </Routes>
    </Router>
  );
}

export default App;





