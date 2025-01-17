import React, { useState } from "react";


const HigherOrLower = ({updateScores, onSetGameResult}) => {
    const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;
    const [currentNumber, setCurrentNumber] = useState(generateRandomNumber());

    const handleGuess = (guess) => {
        const newNumber = generateRandomNumber();
        if (guess == "higher" && newNumber > currentNumber){
          updateScores("Player");
          onSetGameResult("You guessed correct!");
        } else if (guess == "lower" && newNumber < currentNumber){
          updateScores("Player");
          onSetGameResult("You guessed correct!");
        } else {
          updateScores("Computer");
          onSetGameResult("You guessed wrong!");      
        } 
        setCurrentNumber(newNumber);
    };

  return (
    <div>
      <h1>Higher or Lower</h1>
      <p>Current Number: {currentNumber}</p>
      <div>
        <button onClick={() => handleGuess("higher")}>Higher</button>
        <button onClick={() => handleGuess("lower")}>Lower</button>
      </div>

    </div>
  );
};

export default HigherOrLower;
