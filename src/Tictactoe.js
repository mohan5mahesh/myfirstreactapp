import { useState } from 'react';
import { Button } from '@mui/material';
import Confetti from 'react-confetti'
import useWindowSize from 'react-use/lib/useWindowSize'
export function Tictactoe() {
  const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);
  const { width, height } = useWindowSize();
  const decideWiner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const winner = decideWiner(board);

  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    console.log(index);
    const boardCopy = [...board];
    if (!winner && !board[index]) {
      boardCopy[index] = isXTurn ? "X" : "O";
      setBoard(boardCopy);
      setIsXTurn(!isXTurn);
    }
  }
  const reset = () => {
    setBoard([null, null, null, null, null, null, null, null, null]);
    setIsXTurn(true);
  }
  return (
    <>
    {winner ? <Confetti
      width={width}
      height={height}
    /> : ''}
      <div className='board'>
        {board.map((value, index) => (
          <Square value={value} key={index} onClick={() => handleClick(index)} />
        ))
        }
      </div>
      <div className='game-message'>
        <Button onClick={reset}>Restart The Game</Button>
        <p>{winner ? "winner is : " + winner : " "}</p>
      </div>

    </>
  );
}

const Square = ({ value, onClick }) => {
  const styles = {};
  if(!!value){
    styles.color = value === "X" ? "green" : "crimson";
  }
  return (
    <div className="box" onClick={onClick} style={styles}>{value}</div>
  )
}