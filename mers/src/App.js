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
        Board Column
      </div>
      
    </div>
  );
}

export default App;
