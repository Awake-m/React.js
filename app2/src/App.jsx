
import React, { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0);
  const [disableDecrement, setDisableDecrement] = useState(true);
  const [votes, setVotes] = useState({ option1: 0, option2: 0 });

  const increment = () => {
    setCount(count + 1);
    setDisableDecrement(false);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      if (count === 1) {
        setDisableDecrement(true);
      }
    }
  };

  const handleVote = (option) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [option]: prevVotes[option] + 1,
    }));
  };

  return (
    <div className="App">
      <header className="App-header"><br></br><br></br>
        <h1>Counter & Voting App</h1>
        <div className="counter-container">
          <h3>{count}</h3>
          <div className="counter-buttons">
            <button onClick={increment}>+</button>
            <button disabled={disableDecrement} onClick={decrement}>-</button>
          </div>
        </div>

        <h1>Simple Voting</h1>
        <div className="voting-container">
          
          <div className="option">
            <h2>Option-1</h2>
            <button onClick={() => handleVote('option1')}>Vote</button>
            <p>Votes: {votes.option1}</p>
          </div>
          <div className="option">
            <h2>Option-2</h2>
            <button onClick={() => handleVote('option2')}>Vote</button>
          
            <p>Votes: {votes.option2}</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

