import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// In your main index.js or App.js
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For Bootstrap's JavaScript features



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
