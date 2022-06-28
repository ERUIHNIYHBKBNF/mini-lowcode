import React from "react";
import { RIGHT_PANEL_TYPE, ElementType } from "../../consts/types";
import './style.css';

type DrawPanelProps = {
  data: Array<ElementType>;
  setRightPanelType: Function;
  setRightRanelElementId: Function;
}

export default function MidPanel({data, setRightPanelType, setRightRanelElementId}: DrawPanelProps) {
  const generateContent = () => {
    const ret = [];
    for (const item of data) {
      switch (item.type) {
        case 'text':
          ret.push(
            <div
              key={item.id}
              onClick={() => {
                console.log(`clicked: item ${item.id}`);
                setRightPanelType(RIGHT_PANEL_TYPE.TEXT);
                setRightRanelElementId(item.id);
              }}
              style={{
                color: item.color,
                fontSize: item.size,
                width: item.width,
                height: item.height,
                left: item.left,
                top: item.top,
                position: 'absolute',
                backgroundColor: '#bbbbbb'
              }}
            >
              {item.data}
            </div>
          );
          break;
      }
    }
    return ret;
  }
  
  return (
    <div className="midPanel">
      <div>
        <h1>MidPanel</h1>
      </div>
      <div className="midItemsContainer">
        {generateContent()}
      </div>
    </div>
  );
}