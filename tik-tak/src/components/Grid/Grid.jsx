import { useState } from "react";
import Card from "../Card/Card";
import Cheackwinner from "../Helps/Cheackwinner";
import './Grid.css'

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  function play(index) {
    if (board[index] || winner) return; // Prevent playing on an occupied cell or if there's a winner

    const newBoard = [...board];
    newBoard[index] = turn ? "0" : "x";
    setBoard(newBoard);

    const win = Cheackwinner(newBoard, turn ? "0" : "x");
    if (win) {
      setWinner(win);
    } else {
      setTurn(!turn); // Switch turns
    }
  }

  function resetGame() {
    setBoard(Array(numberOfCards).fill(""));
    setTurn(true);
    setWinner(null);
  }

  return (
    <div className="grid-wrapper">
      {winner ? (
        <>
          <h1 className="turn-highlight">Winner is {winner}</h1>
          <button className="reset" onClick={resetGame}>Reset Game</button>
        </>
      ) : (
        <h1 className="turn-highlight">Current turn: {turn ? '0' : 'x'}</h1>
      )}

      <div className="grid">
        {board.map((el, idx) => (
          <Card key={idx} onPlay={() => play(idx)} player={el} index={idx} />
        ))}
      </div>
    </div>
  )
}

export default Grid;
