import logo from './logo.svg';
import {ScreenMap,CombinedMyButton} from './func';
import {user,products} from './data';
import './App.css';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

function Square() {
    const [value, setValue] = useState(null);

    function handleClick() {
        setValue('X');
    }
  
    return (
      <button className="square" onPointerMove={handleClick} >
        {value}
      </button>
    );
}

function Board(){
    return(
        <>
        <div className="board-row">
      {[...Array(4000)].map((value, index) => {  
        return (
          <Square/>  
        );  
      })}  

      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      </>
    )
}

export {Square,Board};
