import React, { useState } from "react";

const CricketRun = () => {
  const [runs, setRuns] = useState(0);
  const [wickets, setWickets] = useState(0);

  const handleRunClick = (runValue) => {
    if (runValue === "wicket") {
      setWickets(wickets + 1);
    } else {
      setRuns(runs + runValue);
    }
  };

  return (
    <div className="col-6">
      <h2>Runs</h2>
      <p>Runs: {runs}</p>
      <p>Wickets: {wickets}</p>
      <div>
        <button
          className="btn btn-sm btn-primary me-1 mb-1"
          onClick={() => handleRunClick(2)}
        >
          2 Runs
        </button>
        <button
          className="btn btn-sm btn-warning mb-2"
          onClick={() => handleRunClick(4)}
        >
          4 Runs
        </button>
        <button
          className="btn btn-sm btn-success me-1"
          onClick={() => handleRunClick(6)}
        >
          6 Runs
        </button>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => handleRunClick("wicket")}
        >
          Wicket
        </button>
      </div>
    </div>
  );
};

export default CricketRun;
