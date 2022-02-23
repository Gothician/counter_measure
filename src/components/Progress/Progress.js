import React, { useState } from "react";

let i = 0;

const Progress = () => {
  const [count, setCount] = useState(0);
  const [execTime, setExecTime] = useState(undefined);
  let startTime = undefined;

  const handleCounterClick = () => {
    i = 0;
    setExecTime(undefined);
    startTime = new Date().getTime();
    counter();
  };

  const counter = () => {
    do {
      i++;
    } while (i % 1e3 !== 0);
    setCount(i);
    if (i < 1e7) {
      setTimeout(counter);
    } else {
      setExecTime(new Date().getTime() - startTime);
    }
  };

  return (
    <div>
      <button onClick={handleCounterClick}>Start count</button>
      <p>
        Counted {count}, Execution time: {execTime ? (execTime - (execTime % 1000)) / 1000 + " s" : "No result yet"}
      </p>
    </div>
  );
};

export default Progress;
