import logo from './logo.svg';
import MyButton from './func';
import user from './data';
import './App.css';
import userEvent from '@testing-library/user-event';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Hello react and npx!</h1>
        <MyButton/>
        <p className='first_css_in_React'>{user.name} first time handling react_11 Mar 2024</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
