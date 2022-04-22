import './App.scss';
import React from 'react'
import AppBar from './Components/AppBar/Appbar';
import BoardBar from './Components/AppBoard/Appboard';

function App() {
  return (
    <div className="Mers-container">
      <AppBar />
      <BoardBar />
      <div className="board-column">
        <header>One</header>
        <ul>
          <li>
            <img scr="https://picsum.photos/seed/picsum/200/200" alt="random-img" />
          </li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
        </ul>
        <footer>Add another card</footer>
      </div>
      
    </div>
  );
}

export default App;
