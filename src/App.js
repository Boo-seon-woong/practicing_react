import logo from './logo.svg';
import {ScreenMap,CombinedMyButton} from './func';
import {user,products} from './data';
import './App.css';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import Game from './tto';

function App() {
  return (
    <div className="App">
        <div style={{ backgroundColor: "#282c34", marginBottom:0, alignContent:"center"}}>
        <h1 style={{color:"white"}}>내맘대로 만드는 틱택토<br/>by BOO SEONWOONG</h1>
        <div className='cover'>
        <Game/>
        </div>
        <p style={{color:"gray"}}><br/>.<br/>.<br/>.<br/>.<br/>사실 리액트 컴포넌트 가운데정렬 어케하는지 몰라서 한참 구글링함;; 아 텍스트랑은 방식 다르더라고 ㅋㅋㅋㅋ<br/>flex로 deploy하는 container용 div로 감싸줘야 하더라</p>
      <a style={{color:"skyblue",textDecoration:"none"}}
          href="https://github.com/Boo-seon-woong"
        >
          Click to visit Boo's github page
        </a>
        </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello react and jsx!</h1>
        
        <p className='first_css_in_React'>{user.name} first time handling react_11 Mar 2024<br/>수정사항 반영하려면 npm run deploy<br/><br/>난 이 겁나 큰 google 마크가 회전하는 이 얼척 없는 상황이 좋아</p>
        <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_light_color_272x92dp.png' className='App-logo'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>아니 세미콜론 안찍어도 된다니 js 왤케 근본없음? 지가 파이썬인줄 아나</p>
        <CombinedMyButton/>
        <p>이 위로 CombinedMyButton이 있?어야 하는디??<br/>.<br/>.<br/>.<br/>세상에는 npm run deploy를 npm start deploy로 헷갈리는 바보도 있대!</p>
        {products.map((v,index)=>(<ScreenMap id={index+1} title={v.title}/>))}
      </header>
    </div>
  );
}

export default App;
