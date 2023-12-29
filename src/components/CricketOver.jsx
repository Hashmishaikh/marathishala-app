import React, { useState } from "react";

const CricketOver = () => {
  const [overLimit, setOverLimit] = useState(0);
  const [overs, setOvers] = useState(0);
  const [balls, setBalls] = useState(0);
  const [getOver, setGetOver] = useState(0);

  const reset = () => {
    window.location.reload();
  };

  const handleBallClick = () => {
    if (balls <= 6) {
      setBalls(balls + 1);
    } else {
      // If 6 balls are bowled, reset balls and increment overs
      setBalls(0);
      setOvers(overs + 1);
    }
  };

  const handleNextOver = () => {
    setBalls(0);
    setOvers(overs + 1);
  };

  const addover = () => {
    setGetOver(overLimit);
  };

  return (
    <div className="col-6">
      <h2>Overs</h2>
      {getOver === 0 ? (
        <>
          <input
            type="number"
            className="form-control mb-2"
            value={overLimit}
            onChange={(e) => setOverLimit(e.target.value)}
            placeholder="over"
          />
          <button className="btn btn-sm btn-outline-info" onClick={addover}>
            Add Over
          </button>
        </>
      ) : (
        getOver
      )}
      <p>Overs: {overs}</p>
      <p>Balls Bowled: {balls}</p>
      <div>
        {overs == getOver ? (
          <button
            onClick={reset}
            type="button"
            className="btn btn-outline-danger"
          >
            Next Inning
          </button>
        ) : (
          balls < 6 && (
            <button
              className="btn btn-outline-primary"
              onClick={handleBallClick}
            >
              Bowl Ball
            </button>
          )
        )}
      </div>
      {/* {balls < 6 && <button onClick={handleBallClick}>Bowl Ball</button>} */}
      {balls === 6 && (
        <p>
          Over completed!{" "}
          <button className="btn btn-outline-light" onClick={handleNextOver}>
            Next Over
          </button>
        </p>
      )}
    </div>
  );
};

export default CricketOver;
