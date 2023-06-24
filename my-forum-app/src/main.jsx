import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ForumProvider } from "./context/ForumContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ForumProvider>
      <App />
    </ForumProvider>
  </React.StrictMode>
);
