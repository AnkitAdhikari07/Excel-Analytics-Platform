import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Dashboard.module.css';

const mockFiles = [
  { 
    id: 1, 
    name: 'Sales_Q1.xlsx', 
    date: '2024-06-01',
    data: [
      { Month: 'January', Sales: 12000, Profit: 2400 },
      { Month: 'February', Sales: 15000, Profit: 3000 },
      { Month: 'March', Sales: 18000, Profit: 3600 },
      { Month: 'April', Sales: 14000, Profit: 2800 },
      { Month: 'May', Sales: 22000, Profit: 4400 },
      { Month: 'June', Sales: 25000, Profit: 5000 }
    ]
  },
  { 
    id: 2, 
    name: 'Inventory_May.xlsx', 
    date: '2024-06-10',
    data: [
      { Product: 'Laptop', Stock: 45, Price: 1200 },
      { Product: 'Mouse', Stock: 120, Price: 25 },
      { Product: 'Keyboard', Stock: 80, Price: 60 },
      { Product: 'Monitor', Stock: 30, Price: 300 },
      { Product: 'Headphones', Stock: 95, Price: 80 }
    ]
  },
  { 
    id: 3, 
    name: 'HR_Report.xlsx', 
    date: '2024-06-15',
    data: [
      { Department: 'Engineering', Employees: 25, Salary: 85000 },
      { Department: 'Marketing', Employees: 15, Salary: 65000 },
      { Department: 'Sales', Employees: 20, Salary: 70000 },
      { Department: 'HR', Employees: 8, Salary: 55000 },
      { Department: 'Finance', Employees: 12, Salary: 75000 }
    ]
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [files, setFiles] = useState(mockFiles);
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef();

  // Function to generate sample data based on filename
  const generateSampleData = (fileName) => {
    const lowerFileName = fileName.toLowerCase();
    
    if (lowerFileName.includes('sales') || lowerFileName.includes('revenue')) {
      return [
        { Month: 'Jan', Sales: Math.floor(Math.random() * 20000) + 10000 },
        { Month: 'Feb', Sales: Math.floor(Math.random() * 20000) + 10000 },
        { Month: 'Mar', Sales: Math.floor(Math.random() * 20000) + 10000 },
        { Month: 'Apr', Sales: Math.floor(Math.random() * 20000) + 10000 },
        { Month: 'May', Sales: Math.floor(Math.random() * 20000) + 10000 },
        { Month: 'Jun', Sales: Math.floor(Math.random() * 20000) + 10000 }
      ];
    } else if (lowerFileName.includes('inventory') || lowerFileName.includes('stock')) {
      return [
        { Product: 'Product A', Stock: Math.floor(Math.random() * 100) + 20, Price: Math.floor(Math.random() * 500) + 50 },
        { Product: 'Product B', Stock: Math.floor(Math.random() * 100) + 20, Price: Math.floor(Math.random() * 500) + 50 },
        { Product: 'Product C', Stock: Math.floor(Math.random() * 100) + 20, Price: Math.floor(Math.random() * 500) + 50 },
        { Product: 'Product D', Stock: Math.floor(Math.random() * 100) + 20, Price: Math.floor(Math.random() * 500) + 50 }
      ];
    } else if (lowerFileName.includes('hr') || lowerFileName.includes('employee')) {
      return [
        { Department: 'Engineering', Employees: Math.floor(Math.random() * 30) + 10, Salary: Math.floor(Math.random() * 50000) + 50000 },
        { Department: 'Marketing', Employees: Math.floor(Math.random() * 20) + 5, Salary: Math.floor(Math.random() * 40000) + 40000 },
        { Department: 'Sales', Employees: Math.floor(Math.random() * 25) + 10, Salary: Math.floor(Math.random() * 45000) + 45000 },
        { Department: 'HR', Employees: Math.floor(Math.random() * 15) + 5, Salary: Math.floor(Math.random() * 35000) + 35000 }
      ];
    } else {
      // Default sample data
      return [
        { Category: 'A', Value: Math.floor(Math.random() * 100) + 10 },
        { Category: 'B', Value: Math.floor(Math.random() * 100) + 10 },
        { Category: 'C', Value: Math.floor(Math.random() * 100) + 10 },
        { Category: 'D', Value: Math.floor(Math.random() * 100) + 10 },
        { Category: 'E', Value: Math.floor(Math.random() * 100) + 10 }
      ];
    }
  };

  const handleUpload = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Generate sample data for the new file
      const sampleData = generateSampleData(file.name);
      setFiles([
        { 
          id: files.length + 1, 
          name: file.name, 
          date: new Date().toISOString().slice(0, 10),
          data: sampleData
        },
        ...files,
      ]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      // Generate sample data for the dropped file
      const sampleData = generateSampleData(file.name);
      setFiles([
        { 
          id: files.length + 1, 
          name: file.name, 
          date: new Date().toISOString().slice(0, 10),
          data: sampleData
        },
        ...files,
      ]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleAnalyze = (file) => {
    // Navigate to the upload page with file data
    navigate('/uploadexcel', {
      state: {
        fileName: file.name,
        filteredData: file.data
      }
    });
  };

  const handleDelete = (id) => {
    setFiles(files.filter(file => file.id !== id));
  };

  return (
    <div className={styles['dashboard-bg']}>
      <div className={styles['dashboard-card']}>
        <div className={styles['dashboard-header']}>
          <h2 className={styles['dashboard-title']}>Dashboard</h2>
        </div>
        <div
          className={dragActive ? `${styles.dropbox} ${styles['dropbox-active']}` : styles.dropbox}
          onClick={handleUpload}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          <input
            ref={inputRef}
            type="file"
            style={{ display: 'none' }}
            onChange={handleFileChange}
            accept=".xlsx,.xls,.csv"
          />
          {dragActive ? 'Drop your Excel file here...' : 'Click or drag & drop to upload a new Excel file (.xlsx, .xls, .csv)'}
        </div>
        <div className={styles['files-section']}>
          <h3 className={styles['files-title']}>Previous Files</h3>
          <table className={styles['files-table']}>
            <thead>
              <tr>
                <th>Filename</th>
                <th>Upload Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {files.map(file => (
                <tr key={file.id}>
                  <td data-label="Filename">{file.name}</td>
                  <td data-label="Upload Date" className={styles['files-date']}>{file.date}</td>
                  <td data-label="Actions">
                    <button onClick={() => handleAnalyze(file)} className={styles['analyze-btn']}>Analyze</button>
                    <button
                      className={styles['delete-btn']}
                      title="Delete file"
                      onClick={() => handleDelete(file.id)}
                      aria-label="Delete file"
                    >
                      &times;
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
