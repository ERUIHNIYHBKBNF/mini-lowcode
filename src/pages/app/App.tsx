import React, { useState } from 'react';
import './App.css';
import LeftPanel from '../leftPanel';
import MidPanel from '../midPanel';
import RightPanel from '../rightPanel';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import drawData from '../../mock/drawData.json';
import { RIGHT_PANEL_TYPE } from '../../consts/types';

function App() {
  const [drawPanelData, setDrawPanelData] = useState([...drawData.data]);
  const [rightPanelType, setRightPanelType] = useState(RIGHT_PANEL_TYPE.TEXT);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <LeftPanel />
        <MidPanel data={drawPanelData} setRightPanelType={setRightPanelType} />
        <RightPanel />
      </div>
    </DndProvider>
  );
}

export default App;
