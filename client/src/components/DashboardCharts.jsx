import React from 'react';
import Plot from 'react-plotly.js';
import styles from '../pages/AdminDashboard.module.css';

const userSignups = {
  x: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  y: [120, 150, 180, 220, 275, 320],
};
const fileUploads = {
  x: ['Jan', 'Mar', 'May', 'Jun'],
  y: [40, 70, 110, 130],
};

const DashboardCharts = () => (
  <div className={styles.dashboardCharts}>
    <div className={styles.dashboardChartCard}>
      <div className={styles.dashboardChartTitle}>User Signups Over Time</div>
      <Plot
        data={[{
          x: userSignups.x,
          y: userSignups.y,
          type: 'bar',
          marker: { color: '#6366f1' },
        }]}
        layout={{
          autosize: true,
          margin: { t: 20, l: 40, r: 10, b: 40 },
          font: { family: 'inherit', size: 14 },
          xaxis: { title: '', tickfont: { size: 13 } },
          yaxis: { title: '', tickfont: { size: 13 } },
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
          height: 220,
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: '100%', height: '220px' }}
      />
    </div>
    <div className={styles.dashboardChartCard}>
      <div className={styles.dashboardChartTitle}>File Uploads Trend</div>
      <Plot
        data={[{
          x: fileUploads.x,
          y: fileUploads.y,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: '#a21caf', size: 8 },
          line: { color: '#a21caf', width: 3 },
        }]}
        layout={{
          autosize: true,
          margin: { t: 20, l: 40, r: 10, b: 40 },
          font: { family: 'inherit', size: 14 },
          xaxis: { title: '', tickfont: { size: 13 } },
          yaxis: { title: '', tickfont: { size: 13 } },
          plot_bgcolor: '#fff',
          paper_bgcolor: '#fff',
          height: 220,
        }}
        config={{ displayModeBar: false, responsive: true }}
        style={{ width: '100%', height: '220px' }}
      />
    </div>
  </div>
);

export default DashboardCharts; 