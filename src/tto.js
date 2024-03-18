import logo from './logo.svg';
import {ScreenMap,CombinedMyButton} from './func';
import {user,products} from './data';
import './App.css';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';

function Square(){
    return <button className='square'>x</button>
}

function Board(){
    return(
        <>
        <div className="board-row">
          <button className="square">1</button>
          <button className="square">2</button>
          <button className="square">3</button>
        </div>
        <div className="board-row">
          <button className="square">4</button>
          <button className="square">5</button>
          <button className="square">6</button>
        </div>
        <div className="board-row">
          <button className="square">7</button>
          <button className="square">8</button>
          <button className="square">9</button>
        </div>
      </>
    )
}

export {Square,Board};
