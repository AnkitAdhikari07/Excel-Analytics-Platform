/**
 * Dashboard.jsx
 * 
 * Main dashboard component for Excel Analytics app.
 * Provides a user interface for:
 * - Uploading Excel files
 * - Previewing data
 * - Selecting analysis types
 * - Customizing analysis parameters
 * - Performing data analysis
 */

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as XLSX from 'xlsx';
import './Dashboard.css';

/**
 * Dashboard component for Excel Analytics app.
 * Provides UI for uploading Excel files, previewing data,
 * selecting analysis types, customizing parameters, and performing analysis.
 */
const Dashboard = () => {
  // State to store the selected Excel file
  const [selectedFile, setSelectedFile] = useState(null);
  // State to store parsed JSON data from the Excel file
  const [data, setData] = useState(null);
  // React Router hook for navigation
  const navigate = useNavigate();
  // Ref for file input element to reset its value
  const fileInputRef = useRef(null);

  // Effect hook to add/remove dashboard-specific CSS class on body element
  useEffect(() => {
    document.body.classList.add('dashboard-page'); // Add class on mount
    return () => {
      document.body.classList.remove('dashboard-page'); // Remove class on unmount
    };
  }, []);

  /**
   * Handles file input change event.
   * Reads and parses the selected Excel file into JSON format.
   * @param {Event} event - File input change event
   */
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);

      // Use FileReader to read file as array buffer
      const reader = new FileReader();
      reader.onload = (e) => {
        // Convert file data to Uint8Array and parse with XLSX
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        // Get first sheet and convert to JSON
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const json = XLSX.utils.sheet_to_json(worksheet);
        setData(json);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  /**
   * Clears the selected file and parsed data.
   * Also resets the file input element.
   */
  const handleClearSelection = () => {
    setSelectedFile(null);
    setData(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  /**
   * Handles user logout.
   * Removes auth token from localStorage and navigates to login page.
   */
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  // State for selected analysis type (default: barChart)
  const [selectedAnalysis, setSelectedAnalysis] = React.useState('barChart');
  // State for selected data parameters for analysis
  const [selectedDataParam, setSelectedDataParam] = React.useState([]);

  /**
   * Placeholder function to handle analysis generation.
   * Currently shows an alert with selected analysis and parameters.
   */
  const handleGenerate = () => {
    alert(`Generating ${selectedAnalysis} analysis on ${selectedDataParam.length > 0 ? selectedDataParam.join(', ') : 'no parameter selected'}...`);
  };

  // States for form inputs to frame custom analysis questions
  const [summarise, setSummarise] = React.useState('');
  const [and1, setAnd1] = React.useState('');
  const [and2, setAnd2] = React.useState('');
  const [by, setBy] = React.useState('');
  const [and3, setAnd3] = React.useState('');
  const [and4, setAnd4] = React.useState('');
  const [over, setOver] = React.useState('');
  const [using, setUsing] = React.useState('Sum');

  /**
   * Handles form submission for custom analysis.
   * Displays an alert with the selected parameters.
   * @param {Event} e - Form submit event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted with Summarise: ${summarise}, By: ${by}, Over: ${over}, Using: ${using}, And: [${and1}, ${and2}, ${and3}, ${and4}]`);
  };

  return (
    <>
      {/* Navigation bar */}
      <div className="navbar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Excel Analytics</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
                {/* Commented out dropdown and disabled nav items */}
              </ul>
              {/* Logout button */}
              <button onClick={handleLogout} className="btn btn-primary ms-auto">Logout</button>
            </div>
          </div>
        </nav>
      </div>

      {/* Main dashboard container */}
      <div className="dashboard-container">
        <nav className="dashboard-nav">
          <h1>Visualize Your Data</h1>
        </nav>

        <main className="dashboard-main">
          {/* Section for uploading Excel file */}
          <section className="upload-section">
            <h2>Upload Excel File</h2>
            <input
              type="file"
              accept=".xlsx,.xls"
              onChange={handleFileChange}
              className="file-input"
              ref={fileInputRef}
            />
            <button type="button" className="btn btn-secondary ms-2" onClick={handleClearSelection}>Clear Selection</button>
          </section>

          {/* Data preview and analysis form shown only if data is loaded */}
          {data && (
            <section className="visualization-section">
              <h2>Data Preview</h2>
              <div className="analysis-parameters-form p-3 rounded">
                <h5>Frame your own question</h5>
                <form onSubmit={handleSubmit}>
                  <div className="row mb-2">
                    <label className="col-sm-3 col-form-label">Summarise</label>
                    <div className="col-sm-3">
                      <select
                        className="form-select"
                        value={summarise}
                        onChange={(e) => setSummarise(e.target.value)}
                      >
                        <option value="">--- SELECT ---</option>
                        {Object.keys(data[0]).map((col) => (
                          <option key={col} value={col}>{col}</option>
                        ))}
                      </select>
                    </div>
                    <label className="col-sm-1 col-form-label">And*</label>
                    <div className="col-sm-2">
                      <select
                        className="form-select"
                        value={and1}
                        onChange={(e) => setAnd1(e.target.value)}
                      >
                        <option value="">--- SELECT ---</option>
                        {Object.keys(data[0]).map((col) => (
                          <option key={col} value={col}>{col}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <label className="col-sm-3 col-form-label">By</label>
                    <div className="col-sm-3">
                      <select
                        className="form-select"
                        value={by}
                        onChange={(e) => setBy(e.target.value)}
                      >
                        <option value="">--- SELECT ---</option>
                        {Object.keys(data[0]).map((col) => (
                          <option key={col} value={col}>{col}</option>
                        ))}
                      </select>
                    </div>
                    <label className="col-sm-1 col-form-label">And*</label>
                    <div className="col-sm-2">
                      <select
                        className="form-select"
                        value={and3}
                        onChange={(e) => setAnd3(e.target.value)}
                      >
                        <option value="">--- SELECT ---</option>
                        {Object.keys(data[0]).map((col) => (
                          <option key={col} value={col}>{col}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="row mb-2">
                    <label className="col-sm-3 col-form-label">Over*</label>
                    <div className="col-sm-3">
                      <select
                        className="form-select"
                        value={over}
                        onChange={(e) => setOver(e.target.value)}
                      >
                        <option value="">--- SELECT ---</option>
                        {Object.keys(data[0]).map((col) => (
                          <option key={col} value={col}>{col}</option>
                        ))}
                      </select>
                    </div>
                    <label className="col-sm-1 col-form-label">Using</label>
                    <div className="col-sm-2">
                      <select
                        className="form-select"
                        value={using}
                        onChange={(e) => setUsing(e.target.value)}
                      >
                        <option value="Sum">Sum</option>
                        <option value="Average">Average</option>
                        <option value="Count">Count</option>
                        <option value="Max">Max</option>
                        <option value="Min">Min</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm-12 text-center">
                      <button type="submit" className="btn btn-gradient">Submit</button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Table to display preview of uploaded data */}
              <div className="data-table">
                <table>
                  <thead>
                    <tr>
                      {Object.keys(data[0]).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((row, index) => (
                      <tr key={index}>
                        {Object.values(row).map((value) => (
                          <td key={value}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </main>
      </div>
    </>
  );
};

export default Dashboard;
