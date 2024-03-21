import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if(squares[i]){
      return;
    }
    const nextSquares = squares.slice();
    if(xIsNext) nextSquares[i] = 'X';
    else nextSquares[i]='O';
    setXIsNext(!xIsNext);
    setSquares(nextSquares);
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
    </>
  );
}

export {Square,Board};
