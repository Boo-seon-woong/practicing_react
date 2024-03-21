import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if(calculateWinner(squares)){
      return;
    }
    if(squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) nextSquares[i] = 'X';
    else nextSquares[i]='O';
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "승자: " + winner;
  } else {
    status = (xIsNext ? "X"+ "의 차례" : "O" + "의 차례");
  }

  return (
    <>
      <h1 style={{color:"white"}}>내맘대로 만드는 틱택토 by BOO SEONWOONG</h1>
      <div className="board-row">
        <div className='cover'>
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
      </div>
      <div className="board-row">
        <div className='cover'>
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
      </div>
      <div className="board-row">
        <div className='cover'>
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
      <div className="status" style={{color:"white"}}>{status}</div>
      <p style={{color:"gray"}}><br/>.<br/>.<br/>.<br/>.<br/>사실 리액트 컴포넌트 가운데정렬 어케하는지 몰라서 한참 구글링함;; 아 텍스트랑은 방식 다르더라고 ㅋㅋㅋㅋ<br/>flex로 deploy하는 container용 div로 감싸줘야 하더라</p>
    </>
  );
}


