import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import * as XLSX from 'xlsx';
import Plot from 'react-plotly.js';
import { 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel, 
  Button, 
  Snackbar, 
  Alert 
} from '@mui/material';

const CHART_TYPES = {
  LINE: 'line',
  BAR: 'bar',
  PIE: 'pie',
  BOX: 'box',
  SCATTER: 'scatter'
};

const CHART_CONFIGS = [
  { id: CHART_TYPES.LINE, label: 'Line Chart', description: 'Shows trends over time or categories' },
  { id: CHART_TYPES.BAR, label: 'Bar Chart', description: 'Compares values across categories' },
  { id: CHART_TYPES.PIE, label: 'Pie Chart', description: 'Shows parts of a whole' },
  { id: CHART_TYPES.BOX, label: 'Box Plot', description: 'Displays statistical distribution' },
  { id: CHART_TYPES.SCATTER, label: 'Scatter Plot', description: 'Shows relationship between two variables' },
];

const UploadExcel = () => {
  const location = useLocation();
  const navState = location.state || {};
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileName, setFileName] = useState(navState.fileName || '');
  const [filteredData, setFilteredData] = useState(navState.filteredData || []);
  const [chartState, setChartState] = useState({
    type: CHART_TYPES.LINE,
    data: navState.filteredData || [],
    xAxis: '',
    yAxis: '',
    isLoading: false,
    displayOptions: {
      showGrid: true,
      showLegend: true,
      showValues: true
    }
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

  const chartColors = [
    '#4361ee', '#3f37c9', '#4cc9f0', '#4895ef', '#4361ee', '#3f37c9'
  ];

  // If data is passed from navigation, initialize chart axes
  useEffect(() => {
    if (navState.filteredData && navState.filteredData.length > 0) {
      const columns = Object.keys(navState.filteredData[0]);
      setChartState(prev => ({
        ...prev,
        data: navState.filteredData,
        xAxis: columns[0] || '',
        yAxis: columns.length > 1 ? columns[1] : '',
        isLoading: false
      }));
      setFilteredData(navState.filteredData);
      setFileName(navState.fileName || '');
    }
  }, [navState.filteredData, navState.fileName]);

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);
    setFileName(file ? file.name : '');
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (evt) {
      const data = new Uint8Array(evt.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheet = workbook.SheetNames[0];
      const excelData = XLSX.utils.sheet_to_json(workbook.Sheets[firstSheet]);
      const filtered = excelData.filter((item) => !Object.values(item).every((value) => value === null));
      setFilteredData(filtered);
      if (filtered.length > 0) {
        const columns = Object.keys(filtered[0]);
        setChartState(prev => ({
          ...prev,
          data: filtered,
          xAxis: columns[0] || '',
          yAxis: columns.length > 1 ? columns[1] : '',
          isLoading: false
        }));
      } else {
        setChartState(prev => ({ ...prev, data: [], isLoading: false }));
      }
    };
    reader.readAsArrayBuffer(file);
  };

  // Chart controls
  const handleChartTypeChange = (chartType) => {
    setChartState(prev => ({ ...prev, type: chartType }));
  };
  const handleAxisChange = (axis, value) => {
    setChartState(prev => ({ ...prev, [axis]: value }));
  };

  // Render chart based on selected type
  const renderChart = (chartType) => {
    const { data: chartData, xAxis, yAxis, displayOptions: { showGrid, showLegend, showValues }, isLoading } = chartState;
    if (isLoading) {
      return <div style={{ textAlign: 'center', padding: '2rem', fontSize: '1.2rem', color: '#2b2d42' }}>Loading chart data...</div>;
    }
    if (!chartData || chartData.length === 0) {
      return <div style={{ textAlign: 'center', padding: '2rem', fontSize: '1.2rem', color: '#2b2d42' }}>No data available to display the chart.</div>;
    }
    const chartProps = {
      data: [],
      layout: {
        title: {
          text: `${chartType.charAt(0).toUpperCase() + chartType.slice(1)} Chart`,
          font: { size: 24, color: '#2b2d42', family: 'Inter, sans-serif', weight: 'bold' },
          x: 0.5, xanchor: 'center'
        },
        showlegend: showLegend,
        plot_bgcolor: '#ffffff',
        paper_bgcolor: '#ffffff',
        margin: { t: 80, b: 120, l: 80, r: 60, pad: 10 },
        font: { family: 'Inter, sans-serif', color: '#2b2d42', size: 14 },
        xaxis: {
          title: { text: xAxis, font: { size: 16, weight: 'bold', color: '#2b2d42' }, standoff: 20 },
          showgrid: showGrid, gridcolor: 'rgba(0, 0, 0, 0.08)', tickfont: { size: 14, color: '#4a5568' }, tickangle: -45, automargin: true, showline: true, linewidth: 1, linecolor: 'rgba(0, 0, 0, 0.1)', ticklen: 5, tickwidth: 1, tickcolor: 'rgba(0, 0, 0, 0.1)'
        },
        yaxis: {
          title: { text: yAxis, font: { size: 16, weight: 'bold', color: '#2b2d42' }, standoff: 20 },
          showgrid: showGrid, gridcolor: 'rgba(0, 0, 0, 0.08)', tickfont: { size: 14, color: '#4a5568' }, automargin: true, showline: true, linewidth: 1, linecolor: 'rgba(0, 0, 0, 0.1)', ticklen: 5, tickwidth: 1, tickcolor: 'rgba(0, 0, 0, 0.1)'
        },
        hoverlabel: { bgcolor: '#fff', bordercolor: '#4361ee', borderwidth: 1, bordercap: 'butt', font: { family: 'Inter, sans-serif', size: 13, color: '#2b2d42' } },
        legend: { orientation: 'h', y: -0.25, x: 0.5, xanchor: 'center', font: { size: 14, color: '#4a5568' }, bgcolor: 'transparent', borderwidth: 0 },
        autosize: true, height: 600, hovermode: 'closest', dragmode: false, transition: { duration: 500, easing: 'cubic-in-out' }
      },
      config: {
        displayModeBar: true, responsive: true, displaylogo: false, modeBarButtonsToRemove: ['select2d', 'lasso2d', 'autoScale2d'],
        toImageButtonOptions: { format: 'png', filename: 'chart-export', height: 800, width: 1200, scale: 2 }, scrollZoom: false
      },
      style: { width: '100%', height: '100%', minHeight: '600px' },
      useResizeHandler: true
    };
    switch (chartType) {
      case CHART_TYPES.LINE:
        chartProps.data = [{
          x: chartData.map(item => item[xAxis]),
          y: chartData.map(item => item[yAxis]),
          type: 'scatter', mode: 'lines+markers', name: 'Data Series',
          line: { color: chartColors[0], width: 3, shape: 'spline', smoothing: 0.3 },
          marker: { color: chartColors[0], size: 8, line: { color: 'white', width: 1 } },
          fill: 'tozeroy', fillcolor: `${chartColors[0]}20`, hoverinfo: 'x+y',
          hovertemplate: `<b>${xAxis}</b>: %{x}<br><b>${yAxis}</b>: %{y}<br><extra></extra>`
        }];
        break;
      case CHART_TYPES.BAR:
        const xValues = [...new Set(chartData.map(item => item[xAxis]))];
        const seriesData = [{
          x: xValues,
          y: xValues.map(xVal => {
            const item = chartData.find(d => d[xAxis] === xVal);
            return item ? item[yAxis] : 0;
          }),
          type: 'bar', name: yAxis,
          marker: { color: xValues.map((_, i) => chartColors[i % chartColors.length]), line: { color: 'white', width: 1.5 }, opacity: 0.9 },
          text: showValues ? xValues.map(xVal => {
            const item = chartData.find(d => d[xAxis] === xVal);
            return item ? item[yAxis] : '';
          }) : [],
          textposition: 'outside', textfont: { color: '#2b2d42', weight: 'bold', size: 12 },
          hoverinfo: 'x+y+name',
          hovertemplate: `<b>${xAxis}</b>: %{x}<br><b>${yAxis}</b>: %{y:,.2f}<br><extra></extra>`,
          cliponaxis: false
        }];
        chartProps.data = seriesData;
        chartProps.layout.barmode = 'group';
        chartProps.layout.bargap = 0.4;
        chartProps.layout.bargroupgap = 0.1;
        chartProps.layout.uniformtext = { mode: 'hide', minsize: 10 };
        chartProps.layout.margin.b = Math.max(80, 20 + (Math.max(...xValues.map(String).map(s => s.length)) * 5));
        chartProps.layout.xaxis.tickangle = -30;
        chartProps.layout.xaxis.tickfont.size = 12;
        chartProps.layout.yaxis.tickformat = '.2s';
        if (showValues) {
          chartProps.data[0].texttemplate = '%{text:,.0f}';
          chartProps.data[0].textposition = 'outside';
        }
        break;
      case CHART_TYPES.PIE:
        chartProps.data = [{
          values: chartData.map(item => item[yAxis]),
          labels: chartData.map(item => item[xAxis]),
          type: 'pie', textinfo: 'percent', textposition: 'inside', textfont: { size: 12, color: 'white' },
          hoverinfo: 'label+percent+value', hole: 0.4,
          marker: {
            colors: [ '#F66D44', '#FEAE65', '#E6F69D', '#AADEA7', '#64C2A6', '#2D87BB' ].slice(0, chartData.length),
            line: { color: 'white', width: 2 }
          },
          hovertemplate: `<b>%{label}</b><br>Value: %{value}<br>Percentage: %{percent}<br><extra></extra>`,
          sort: false, direction: 'clockwise', rotation: 0, pull: 0.01
        }];
        chartProps.layout.showlegend = true;
        chartProps.layout.legend = { orientation: 'h', y: -0.2, font: { size: 12 }, bgcolor: 'transparent' };
        break;
      case CHART_TYPES.BOX:
        chartProps.data = [{
          y: chartData.map(item => item[yAxis]),
          type: 'box', name: 'Data Distribution', boxpoints: 'all', jitter: 0.3, pointpos: 0,
          marker: { size: 5, color: chartColors[0], opacity: 0.5, line: { width: 1, color: 'white' } },
          line: { width: 2, color: chartColors[0] }, fillcolor: `${chartColors[0]}20`, hoveron: 'points', hoverinfo: 'y', boxmean: true
        }];
        chartProps.layout.xaxis = { showticklabels: false };
        chartProps.layout.yaxis.title = yAxis;
        break;
      case CHART_TYPES.SCATTER:
        const uniqueXValues = [...new Set(chartData.map(item => item[xAxis]))];
        chartProps.data = uniqueXValues.map((xVal, i) => {
          const points = chartData.filter(item => item[xAxis] === xVal);
          return {
            x: points.map(item => item[xAxis]),
            y: points.map(item => item[yAxis]),
            mode: 'markers', type: 'scatter', name: xVal,
            marker: { color: chartColors[i % chartColors.length], size: 12, opacity: 0.8, line: { color: 'white', width: 1 } },
            hoverinfo: 'x+y',
            hovertemplate: `<b>${xAxis}</b>: %{x}<br><b>${yAxis}</b>: %{y}<br><extra></extra>`
          };
        });
        if (chartData.length > 2) {
          chartProps.data.push({
            x: chartData.map(item => item[xAxis]),
            y: chartData.map(item => item[yAxis]),
            type: 'scatter', mode: 'lines', name: 'Trend',
            line: { color: '#4361ee', width: 2, dash: 'dash' }, showlegend: false, hoverinfo: 'skip'
          });
        }
        break;
      default:
        return <div>Select a valid chart type</div>;
    }
    return <Plot {...chartProps} />;
  };

  const availableColumns = useMemo(() => {
    if (!chartState.data || chartState.data.length === 0) return [];
    return Object.keys(chartState.data[0] || {});
  }, [chartState.data]);

  return (
    <div className="charts-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #e0e0e0' }}>
        <h2 style={{ margin: 0, fontSize: '1.75rem', fontWeight: 700, fontFamily: 'Inter, sans-serif', letterSpacing: '-0.5px', background: 'linear-gradient(90deg, #1a237e 0%, #0d47a1 20%, #1976d2 50%, #42a5f5 80%, #bbdefb 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block', padding: '0.25rem 0' }}>
          {fileName ? (<><span style={{ color: '#2b2d42' }}>{fileName} - </span><span>Data Visualization</span></>) : 'Data Visualization'}
        </h2>
      </div>
      <div style={{ marginBottom: '2rem' }}>
        {/* <input type="file" accept=".xlsx,.xls,.csv" onChange={handleFileUpload} /> */}
        {uploadedFile && <p className="file-info">Uploaded File: {uploadedFile.name}</p>}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '1.5rem 0', justifyContent: 'center' }}>
        {CHART_CONFIGS.map((type) => (
          <Button
            key={type.id}
            variant={chartState.type === type.id ? 'contained' : 'outlined'}
            onClick={() => handleChartTypeChange(type.id)}
            sx={{ backgroundColor: chartState.type === type.id ? '#4361ee' : 'transparent', color: chartState.type === type.id ? 'white' : '#4361ee', border: `1px solid #4361ee`, borderRadius: '8px', padding: '8px 16px', textTransform: 'none', fontWeight: 500, fontSize: '0.875rem', '&:hover': { backgroundColor: chartState.type === type.id ? '#3a56d4' : '#f0f2ff', borderColor: '#3a56d4' }, transition: 'all 0.2s ease-in-out' }}
          >
            {type.label}
          </Button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', margin: '1.5rem 0', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9ff', padding: '1rem', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)' }}>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 200, '& .MuiOutlinedInput-root': { borderRadius: '8px', backgroundColor: 'white', '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#4361ee' }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#4361ee', borderWidth: '1px' } }, '& .MuiInputLabel-root.Mui-focused': { color: '#4361ee' } }}>
          <InputLabel>X-Axis</InputLabel>
          <Select value={chartState.xAxis} onChange={(e) => handleAxisChange('xAxis', e.target.value)} label="X-Axis">
            {availableColumns.map(col => (
              <MenuItem key={`x-${col}`} value={col}>{col}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl variant="outlined" size="small" sx={{ minWidth: 200, '& .MuiOutlinedInput-root': { borderRadius: '8px', backgroundColor: 'white', '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#4361ee' }, '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#4361ee', borderWidth: '1px' } }, '& .MuiInputLabel-root.Mui-focused': { color: '#4361ee' } }}>
          <InputLabel>Y-Axis</InputLabel>
          <Select value={chartState.yAxis} onChange={(e) => handleAxisChange('yAxis', e.target.value)} label="Y-Axis">
            {availableColumns.map(col => (
              <MenuItem key={`y-${col}`} value={col}>{col}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem', backgroundColor: 'white', padding: '0.5rem', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
          {[
            { key: 'showGrid', label: 'Grid' },
            { key: 'showLegend', label: 'Legend' },
            { key: 'showValues', label: 'Values' }
          ].map(({ key, label }) => (
            <Button
              key={key}
              variant={chartState.displayOptions[key] ? 'contained' : 'outlined'}
              onClick={() => setChartState(prev => ({ ...prev, displayOptions: { ...prev.displayOptions, [key]: !prev.displayOptions[key] } }))}
              size="small"
              sx={{ minWidth: '80px', backgroundColor: chartState.displayOptions[key] ? '#4361ee' : 'transparent', color: chartState.displayOptions[key] ? 'white' : '#4361ee', border: '1px solid #4361ee', borderRadius: '6px', padding: '4px 12px', textTransform: 'none', fontWeight: 500, fontSize: '0.8rem', '&:hover': { backgroundColor: chartState.displayOptions[key] ? '#3a56d4' : '#f0f2ff', borderColor: '#3a56d4' }, transition: 'all 0.2s ease-in-out' }}
            >
              {label}
            </Button>
          ))}
        </div>
      </div>
      <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '2rem', boxShadow: '0 4px 25px rgba(0, 0, 0, 0.08)', display: 'flex', flexDirection: 'column', width: '96%', maxWidth: '1400px', margin: '2rem auto', overflow: 'visible', minHeight: '700px', position: 'relative' }}>
        <div style={{ width: '100%', height: '100%', minHeight: '600px', position: 'relative', overflow: 'visible' }}>
          {renderChart(chartState.type)}
        </div>
      </div>
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar(prev => ({ ...prev, open: false }))}>
        <Alert onClose={() => setSnackbar(prev => ({ ...prev, open: false }))} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default UploadExcel;
