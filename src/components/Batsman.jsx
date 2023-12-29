import React, { useState } from "react";

const Batsman = () => {
  const [batsmanRuns, setBatsmanRuns] = useState([]);

  const handleRunClick = (runValue) => {
    setBatsmanRuns([...batsmanRuns, runValue]);
  };

  const totalRuns = batsmanRuns.reduce((acc, run) => acc + run, 0);

  return (
    <div>
      <h2>Batsman Runs</h2>
      <p>Total Runs: {totalRuns}</p>
      <p>Individual Runs: {batsmanRuns.join(", ") || "No runs yet"}</p>
      <button onClick={() => handleRunClick(0)}>Dot Ball</button>
      <button onClick={() => handleRunClick(1)}>1 Run</button>
      <button onClick={() => handleRunClick(2)}>2 Runs</button>
      <button onClick={() => handleRunClick(3)}>3 Runs</button>
      <button onClick={() => handleRunClick(4)}>4 Runs</button>
      <button onClick={() => handleRunClick(6)}>6 Runs</button>
      <button onClick={() => handleRunClick("wicket")}>Wicket</button>
    </div>
  );
};

export default Batsman;
