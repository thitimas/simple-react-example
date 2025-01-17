// const Scoreboard = ({playerScore, computerScore}) => {
//     return (
//       <div id="scoreboard">
//         <p>Player Score: <span id="player-score">{playerScore}</span></p>
//         <p>Computer Score: <span id="computer-score">{computerScore}</span></p>
//       </div>
      
//     );
//   };
const Scoreboard = ({playerScore, computerScore, winner}) => {
    return (
      <div id="scoreboard">
        <p> Player Score: {playerScore} {winner === "Player" && "(Winner!)"} </p>
        <p> Computer Score: {computerScore} {winner === "Computer" && "(Winner!)"} </p>
        {winner === "Tie" && <p>It's a tie!</p>}
      </div>
    );
  };

export default Scoreboard;