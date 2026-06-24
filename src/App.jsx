import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import "./App.css";
import logoRexy from "./assets/rexy-logo.png";
import { mainContent } from "../data";

let today = new Date().toLocaleDateString();
let time = new Date().toLocaleTimeString();

// function DailyReport(props) {
//   return (
//     <div className="daily-report">
//       <h2 className="daily-report-header">{props.title}</h2>
//       <p className="report">{props.content}</p>
//     </div>
//   );
// }

function Header() {
  return (
    <>
      <h1>Hello, Rexy!</h1>
      <p>
        Today is: <strong>{today}</strong> and the current time is{" "}
        <strong>{time}</strong>.
      </p>
    </>
  );
}

function Content(props) {
  return (
    <li>
      <img src={props.image} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Introduce() {
  return (
    <>
      <h2>I'm Dylan</h2>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="wrapper">
        <Header />
        <Introduce />
        <button onClick={() => setCount((count) => count + 1)}>
          {" "}
          Count is {count}
        </button>{" "}
        <br />
        <button onClick={() => alert("Welcome to my first React App!")}>
          Click Me!
        </button>
        <ul>
          <Content
            image={mainContent[0].image}
            alt={mainContent[0].alt}
            title={mainContent[0].title}
            description={mainContent[0].description}
          />
          <Content
            image={mainContent[1].image}
            alt={mainContent[1].alt}
            title={mainContent[1].title}
            description={mainContent[1].description}
          />
          <Content {...mainContent[0]} />
          <Content {...mainContent[1]} />
        </ul>
        <img src={logoRexy} alt="Rexy Logo" />
      </div>
    </>
  );
}

export default App;
