// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import heroImg from "./assets/hero.png";
// import "./App.css";

function DailyReport(props) {
  return (
    <div className="daily-report">
      <h2 className="daily-report-header">{props.title}</h2>
      <p className="report">{props.content}</p>
    </div>
  );
}

function App() {
  return (
    <div className="wrapper">
      <h1 className="header">Hello, Rexy!</h1>
      <h2 className="subtitle">My first component</h2>
      <h2 className="introduce"> I'm Dylan</h2>
      <button className="button" onClick={() => alert("Thank you!")}>
        Click me!
      </button>
      <DailyReport
        title="Report 23/06/2026"
        content="Today I learned about React components and how to create them. It was a great learning experience!"
      />
      <DailyReport
        title="What will I learn tomorrow?"
        content="State - useState - re-render"
      />
    </div>
  );
}

export default App;
