import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return <div className="App"><h1>Hello world</h1></div>;
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
