// game.jsx

import React, { useState, useEffect } from "react";
import "./game.css"; // Import file CSS game Anda

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board({ squares, onClick }) {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square key={index} value={square} onClick={() => onClick(index)} />
      ))}
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function TicTacToeGame() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (i) => {
    if (squares[i] || winner) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);

    const gameWinner = calculateWinner(newSquares);
    if (gameWinner) {
      setWinner(gameWinner);
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const restartGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  useEffect(() => {
    if (!xIsNext && !winner) {
      const emptySquares = squares.reduce((acc, val, index) => {
        if (!val) {
          acc.push(index);
        }
        return acc;
      }, []);

      if (emptySquares.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        setTimeout(() => handleClick(emptySquares[randomIndex]), 1000);
      }
    }
  }, [xIsNext, winner, squares]);

  return (
    <div className="game shadow-xl">
      <div className="status">
        {winner ? `${winner === "X" ? "You're a Winner" : "Rahmat's a Winner"}` : `Next player: ${xIsNext ? "You" : "Rahmat's"}`}
      </div>
      <Board squares={squares} onClick={handleClick} />
      <button className="restart-button" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}

export default TicTacToeGame;
