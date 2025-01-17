import React from "react";
import { useState } from 'react'

const Header = ({title, instruction}) => {
    return (
      <div>
        <h1>{title}</h1>
        <p className="instructions">
          {instruction}
        </p>
      </div>
    );
  };

  
const Choices = ({choices, onPlayerChoice}) => {
  return (
    <div className="choices">
      {choices.map((choice, index) => (
        <button key={index} onClick={() => onPlayerChoice(choice)}>
          {choice.icon} {choice.name}</button>
      ))}
    </div>
  );
};
  
  
  
  
const RockPaperScissors = ({updateScores, onSetGameResult}) => {
  const getComputerChoice = () => {
      const choices = ["Rock", "Paper", "Scissors"];
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
  };
    
    const determineWinner = (playerChoice, computerChoice) => {
      if (playerChoice === computerChoice) {
        return "It's a tie!";
      }
      if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
      ) {
        return "You win!";
      }
      return "Computer wins!";
    };
  const choices = [
    { name: 'Rock', icon: '✊' },
    { name: 'Paper', icon: '✋' },
    { name: 'Scissors', icon: '✌️' },
  ];
  const [playerScore, setPlayerScore] = React.useState(0);
  const [computerScore, setComputerScore] = React.useState(0);

  const handlePlayerChoice = (playerChoice) => {
    const computerChoice = getComputerChoice();
    const gameResult = determineWinner(playerChoice.name, computerChoice);

    console.log(gameResult);
    // Update scores
    if (gameResult === "You win!") {
      updateScores("Player");
      setPlayerScore(playerScore + 1);

    } else if (gameResult === "Computer wins!") {
      updateScores("Computer");
      setComputerScore(computerScore + 1);
    } else {
      updateScores("Tie");
    }

    onSetGameResult(
      `Player chose: ${playerChoice.name}, 
      Computer chose: ${computerChoice}. ${gameResult}`
    );

  };

  return (
    <div>
      <Header title="Rock-Paper-Scissors Game!"
        instruction = "Choose Rock, Paper, or Scissors to play against the computer!"/>
      <Choices choices={choices} onPlayerChoice = {handlePlayerChoice}/>
    </div>
  );
};

export default RockPaperScissors;



