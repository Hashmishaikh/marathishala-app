import { useState } from "react";
import "./App.css";
import CricketOver from "./components/CricketOver";
import CricketRuns from "./components/CricketRuns";
import Batsman from "./components/Batsman";

function App() {
  return (
    <div style={{ backgroundColor: "#242424" }}>
      <h2
        className="d-flex justify-content-center"
        style={{ backgroundColor: "#fff" }}
      >
        Marathishala Cricket
      </h2>
      <div className="main row container">
        <CricketRuns />
        <CricketOver />
      </div>
      {/* <Batsman /> */}
    </div>
  );
}

export default App;
