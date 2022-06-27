import React from 'react';
import './App.css';
import LeftPanel from '../leftPanel';
import MidPanel from '../midPanel';
import RightPanel from '../rightPanel';

function App() {
  return (
    <div className="App">
      <LeftPanel />
      <MidPanel />
      <RightPanel />
    </div>
  );
}

export default App;
