// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react';


// function App() {
  
//   let [count, setCount] = useState(0);
//   let [disable, setDisable] = useState(true);

//   const Inc = () => {
//     setCount(count + 1);
//     setDisable(false);
//   };
//   const dec = () => {
//     if (count > 1) {
//       setCount(count - 1);
//     } else {


//       setCount(0);
//       setDisable(true);
//     }

     

//     const [votes, setVotes] = useState({ option1: 0, option2: 0 });

//   const handleVote = (option) => {
//     setVotes((prevVotes) => ({
//       ...prevVotes,
//       [option]: prevVotes[option] + 1,
//     }));
    
//   };


//   return (
//     <div className="App">
//       <header className="App-header">
      
//       <h1>Couter Up</h1>
//       <div className="box1">
//       <h3>{count}</h3>
//       <button onClick={Inc}>+</button>

      
//       <button disabled={disable} onClick={dec}>
//         -
//       </button>


//       <div className="box2">
//       <h1>Simple Voting App</h1>
//       <div>
//         <h2>Option 1</h2>
//         <button onClick={() => handleVote('option1')}>Vote</button>
//         <p>Votes: {votes.option1}</p>
//       </div>
//       <div>
//         <h2>Option 2</h2>
//         <button onClick={() => handleVote('option2')}>Vote</button>
//         <p>Votes: {votes.option2}</p>
//       </div>
//       </div>

//     </div>

    

//       </header>
//     </div>
//   )
// }

// export default App




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

