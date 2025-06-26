/**
 * main.jsx
 * 
 * Entry point of the React application.
 * Sets up the root component and initializes the React DOM.
 */

// Import necessary dependencies
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS for styling
import { StrictMode } from 'react'; // React's StrictMode component for development
import { createRoot } from 'react-dom/client'; // React DOM client for rendering
import './index.css'; // Application-wide CSS styles
import App from './App.jsx'; // Main application component

// Create and render the root component in StrictMode
// StrictMode helps identify potential problems in the application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
