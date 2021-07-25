import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Orlando" />
        <p className="text-center">
          <a
            href="https://github.com/Mcruz92/react-weather-app1"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced on GitHub{" "}
          </a>
          by Michele Ashley Cruz
        </p>
      </div>
    </div>
  );
}