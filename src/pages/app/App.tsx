import React from 'react';
import './App.css';
import LeftPanel from '../leftPanel';
import MidPanel from '../midPanel';
import RightPanel from '../rightPanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <LeftPanel />
        <MidPanel />
        <RightPanel />
      </div>
    </DndProvider>
  );
}

export default App;
