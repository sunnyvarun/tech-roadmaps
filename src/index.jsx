import React from "react";
import ReactDOM from "react-dom/client";  // Import from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";  // Wrap the app with BrowserRouter
import App from "./App";
import './index.css'; // Make sure this import exists

// Create root using the new API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the app inside the root
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Wrap the whole app with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);