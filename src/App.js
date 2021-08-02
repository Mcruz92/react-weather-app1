import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Orlando" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/michele-cruz-86554b86/"
            target="_blank"
            rel="noreferrer"
          >
            Michele Ashley Cruz
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Mcruz92/react-weather-app1"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://optimistic-wright-53e3a2.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}