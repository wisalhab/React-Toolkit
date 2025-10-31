import React, { useState } from "react";

const JobForm = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("start");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!jobTitle || !category) {
      alert("Please enter a job title and select a category.");
      return;
    }
    console.log({
      jobTitle,
      category,
      status,
    });
    // reset form
    setJobTitle("");
    setCategory("");
    setStatus("start");
  };

  return (
    <div className="form-header">
      <form onSubmit={handleSubmit}>
        {/* Input field */}
        <input
          type="text"
          className="bot-input"
          placeholder="Enter the job"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />

        {/* Category buttons */}
        <div className="form-details">
          <div className="bottom-line">
            <button type="button" onClick={() => setCategory("Read Emails")}>
              Read Emails
            </button>
            <button type="button" onClick={() => setCategory("Web Parsing")}>
              Web Parsing
            </button>
            <button type="button" onClick={() => setCategory("Send Emails")}>
              Send Emails
            </button>
          </div>
        </div>

        {/* Dropdown menu */}
        <select
          className="job-status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="start">Start Process</option>
          <option value="running">Running</option>
          <option value="completed">Completed</option>
          <option value="stopped">Stopped</option>
        </select>

        {/* Submit button */}
        <button type="submit" className="submit-data">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default JobForm;