import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const jobSites = [
  // Your full jobSites array here (unchanged)
  { category: 'secular', name: 'Indeed UK', url: 'https://www.indeed.co.uk', logo: 'https://matchutd.github.io/uk-job-directory/indeed-logo.png', description: 'One of the largest job boards with listings across all industries and locations.', search: 'q=' },
  { category: 'secular', name: 'Reed.co.uk', url: 'https://www.reed.co.uk', logo: 'https://matchutd.github.io/uk-job-directory/Reed-Logo.png', description: 'Popular UK job site offering thousands of roles, courses, and advice.', search: 'q=' },
  { category: 'secular', name: 'LinkedIn Jobs', url: 'https://www.linkedin.com/jobs', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png', description: 'Professional networking site with advanced job search options.', search: 'keywords=' },
  { category: 'secular', name: 'Totaljobs', url: 'https://www.totaljobs.com', logo: 'https://matchutd.github.io/uk-job-directory/Totaljobs-Logo.png', description: 'UK-focused job board for full-time and part-time opportunities.', search: 'q=' },
  { category: 'secular', name: 'CV-Library', url: 'https://www.cv-library.co.uk', logo: 'https://matchutd.github.io/uk-job-directory/CV-Library-Logo.png', description: 'One of the UK’s leading independent job boards.', search: 'keywords=' },
  { category: 'secular', name: 'Monster UK', url: 'https://www.monster.co.uk', logo: 'https://matchutd.github.io/uk-job-directory/Monster-Logo.png', description: 'Global job search site with resume and career resources.', search: 'q=' },
  { category: 'secular', name: 'Adzuna', url: 'https://www.adzuna.co.uk', logo: 'https://matchutd.github.io/uk-job-directory/Adzuna-Logo.png', description: 'Smart job search engine with salary stats and insights.', search: 'q=' },
  { category: 'secular', name: 'Jobsite', url: 'https://www.jobsite.co.uk', logo: 'https://matchutd.github.io/uk-job-directory/Jobsite-Logo.png', description: 'UK site offering a wide range of job listings.', search: 'q=' },
  { category: 'secular', name: 'Guardian Jobs', url: 'https://jobs.theguardian.com', logo: 'https://matchutd.github.io/uk-job-directory/Guardian-Jobs-Logo.png', description: 'Known for public sector, charity, and education roles.', search: 'keywords=' },
  { category: 'secular', name: 'Glassdoor UK', url: 'https://www.glassdoor.co.uk/Job/index.htm', logo: 'https://matchutd.github.io/uk-job-directory/Glassdoor-Logo.png', description: 'Job search with company reviews and salaries.', search: 'sc.keyword=' },
  { category: 'christian', name: 'ChristianJobs.co.uk', url: 'https://www.christianjobs.co.uk', logo: 'https://matchutd.github.io/uk-job-directory/Christian-Jobs-Logo.png', description: 'UK-based board for Christian ministry and faith-aligned roles.', search: 'keywords=' },
  { category: 'christian', name: 'Premier Jobsearch', url: 'https://www.premierjobsearch.co.uk', logo: 'https://matchutd.github.io/uk-job-directory/Premier-Logo.png', description: 'Premier Christian Media’s job platform for faith-driven careers.', search: 'keywords=' },
  { category: 'christian', name: 'Church of England Pathways', url: 'https://pathways.churchofengland.org', logo: 'https://matchutd.github.io/uk-job-directory/CofE-Logo.png', description: 'Platform for jobs within the Church of England network.', search: '' },
  { category: 'christian', name: 'Global Connections', url: 'https://globalconnections.org.uk/uk-jobs-and-volunteering', logo: 'https://matchutd.github.io/uk-job-directory/Global-Connections-Logo.png', description: 'Faith-oriented roles with a focus on mission and ministry.', search: '' },
  { category: 'christian', name: 'OSCAR', url: 'https://oscar.org.uk/opportunities/viewall', logo: 'https://matchutd.github.io/uk-job-directory/OSCAR-Logo.png', description: 'The UK’s Largest Christian Jobs & Opportunities Platform', search: '' },
  { category: 'christian', name: 'FIEC', url: 'https://fiec.org.uk/jobs', logo: 'https://matchutd.github.io/uk-job-directory/FIEC-Logo.png', description: 'Ministry positions currently being advertised by FIEC churches across the UK..', search: '' },
  { category: 'christian', name: 'Faithworks Job Board', url: 'https://www.faithworks.org.uk/jobs', logo: 'https://matchutd.github.io/uk-job-directory/Faithworks-Logo.png', description: 'Faith-led community job listings.', search: '' },
  { category: 'christian', name: 'Evangelical Alliance Jobs', url: 'https://www.eauk.org/jobs', logo: 'https://matchutd.github.io/uk-job-directory/Evangelical-Alliance-Logo.png', description: 'Evangelical jobs in the UK and abroad.', search: '' },
  { category: 'christian', name: 'Church Times Jobs', url: 'https://jobs.churchtimes.co.uk', logo: 'https://matchutd.github.io/uk-job-directory/Church-Times-Logo.png', description: 'Church-based and faith sector jobs.', search: '' },
  { category: 'christian', name: 'Salvation Army Jobs UK', url: 'https://www.salvationarmy.org.uk/jobs', logo: 'https://matchutd.github.io/uk-job-directory/Salvation-Army-Logo.png', description: 'UK Salvation Army hiring portal.', search: '' },
];

function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSites = jobSites.filter((site) => {
    const query = searchTerm.toLowerCase();
    return (
      site.name.toLowerCase().includes(query) ||
      site.description.toLowerCase().includes(query)
    );
  });

  const renderCards = (category) =>
    filteredSites
      .filter((site) => site.category === category)
      .map((site, idx) => {
        const queryParam = site.search
          ? `?${site.search}${encodeURIComponent(searchTerm)}`
          : "";
        return (
          <div className="card" key={idx}>
            <img
              src={site.logo}
              alt={`${site.name} Logo`}
              className="card-img"
            />
            <div className="card-body">
              <h2 className="card-title">{site.name}</h2>
              <p className="card-description">
                {site.description}
                {searchTerm && (
                  <>
                    <br />
                    <strong>Search for "{searchTerm}"</strong>
                  </>
                )}
              </p>
              <a
                href={`${site.url}${queryParam}`}
                target="_blank"
                rel="noopener noreferrer"
                className="card-button"
              >
                {searchTerm ? `Search "${searchTerm}"` : "Visit Site"}
              </a>
            </div>
          </div>
        );
      });

  return (
    <div className="homepage-container">
      {/* Moved link here for visibility */}
      <div className="top-link">
        <Link to="/jobs" className="card-button special-button">
          View Live Job Data
        </Link>
      </div>

      <h1>UK Job Search Directory</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search job boards or keywords..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="category">
        <h2>🌐 General Job Boards</h2>
        <div className="grid">{renderCards("secular")}</div>
      </div>

      <div className="category">
        <h2>✝️ Christian Job Boards</h2>
        <div className="grid">{renderCards("christian")}</div>
      </div>
    </div>
  );
}

export default HomePage;

