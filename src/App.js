import logo from './logo.svg';
import {MyButton,ScreenMap} from './func';
import {user,products} from './data';
import './App.css';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello react and jsx!</h1>
        <MyButton/>
        <p className='first_css_in_React'>{user.name} first time handling react_11 Mar 2024</p>
        <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' className='App-logo'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {products.map((v,index)=>(<ScreenMap id={index+1} title={v.title}/>))}
      </header>
    </div>
  );
}

export default App;
