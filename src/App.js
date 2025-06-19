import React, { useState } from 'react';

export default function JobSearchApp() {
  const [primaryJobs, setPrimaryJobs] = useState([]);
  const [secondaryJobs, setSecondaryJobs] = useState([]);
  const [form, setForm] = useState({
    listType: 'primary',
    title: '',
    link: '',
    location: '',
    posted: '',
    summary: '',
    score: ''
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleAdd = () => {
    const job = { ...form };
    if (form.listType === 'primary') {
      setPrimaryJobs([...primaryJobs, job]);
    } else {
      setSecondaryJobs([...secondaryJobs, job]);
    }
    setForm({ ...form, title: '', link: '', location: '', posted: '', summary: '', score: '' });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Daily Job Search Summary</h1>
      <div className="bg-gray-100 p-4 rounded mb-6">
        <h2 className="text-2xl font-semibold mb-2">Criteria</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Source: All sites on <a href="https://matchutd.github.io/uk-job-directory/" target="_blank" className="text-blue-600 underline">UK Job Directory</a></li>
          <li>Date Posted: Since yesterday</li>
          <li>Location: Within 25 miles of Swindon OR Remote; secondary list drops location</li>
          <li>Role Focus: BD / Sales / Marketing / Charity Partnerships / Project &amp; Programme</li>
          <li>Core Skills: Large-deal ERP/CRM sales; HubSpot CRM; Google Ads PPC/SEO; Solution selling &amp; negotiation; Key-account management; Digital marketing strategy; Charity/NGO fundraising &amp; partnerships; Project/Programme management; Stakeholder engagement; Volunteer coordination; Community outreach; Pastoral care &amp; communication</li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Add a Job</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <select name="listType" value={form.listType} onChange={handleChange} className="border p-2 rounded">
            <option value="primary">Primary List (25mi/Remote)</option>
            <option value="secondary">Secondary List (All UK/Remote)</option>
          </select>
          <input name="title" value={form.title} onChange={handleChange} placeholder="Job Title" className="border p-2 rounded" />
          <input name="link" value={form.link} onChange={handleChange} placeholder="Link to advert" className="border p-2 rounded" />
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="border p-2 rounded" />
          <input name="posted" value={form.posted} onChange={handleChange} placeholder="Posted date" className="border p-2 rounded" />
          <input name="score" value={form.score} onChange={handleChange} placeholder="Score (%)" className="border p-2 rounded" />
          <textarea name="summary" value={form.summary} onChange={handleChange} placeholder="Brief summary of fit" className="border p-2 rounded col-span-1 sm:col-span-2 h-20"></textarea>
        </div>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Job</button>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Primary List (25 mi / Remote)</h2>
        {primaryJobs.length > 0 ? (
          <ul className="space-y-4">
            {primaryJobs.map((job, i) => (
              <li key={i} className="border p-4 rounded shadow-sm">
                <a href={job.link} target="_blank" className="text-blue-600 underline font-semibold">{job.title}</a>
                <div className="text-sm text-gray-700 mt-1">
                  Location: {job.location} | Posted: {job.posted} | Score: {job.score}%
                </div>
                <p className="mt-2">{job.summary}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No jobs added yet.</p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Secondary List (All UK / Remote)</h2>
        {secondaryJobs.length > 0 ? (
          <ul className="space-y-4">
            {secondaryJobs.map((job, i) => (
              <li key={i} className="border p-4 rounded shadow-sm">
                <a href={job.link} target="_blank" className="text-blue-600 underline font-semibold">{job.title}</a>
                <div className="text-sm text-gray-700 mt-1">
                  Location: {job.location} | Posted: {job.posted} | Score: {job.score}%
                </div>
                <p className="mt-2">{job.summary}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No jobs added yet.</p>
        )}
      </div>
    </div>
  );
}
