import React from "react";
import { useDrop } from "react-dnd";
import { RIGHT_PANEL_TYPE, ElementType, COMPONENT_TYPE } from "../../consts/types";
import './style.css';

type DrawPanelProps = {
  data: Array<ElementType>;
  setData: Function;
  setRightPanelType: Function;
  setRightRanelElementId: Function;
}

export default function MidPanel({data, setRightPanelType, setRightRanelElementId, setData}: DrawPanelProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [, drop] = useDrop(() => ({
    accept: COMPONENT_TYPE.TEXT, // drop接受的type
    drop: (_, monitor) => {
      const { x, y } = monitor.getSourceClientOffset()!; // 相对屏幕左上角的位置
      // 计算相对容器左上角的位置
      const [currentX, currentY] = [x - containerRef.current!.offsetLeft, y - 75];
      setData([
        ...data,
        {
          id: `text-${Date.now()}`,
          type: 'text',
          data: '我是新建的文字',
          color: '#000000',
          size: '12px',
          width: '100px',
          height: '20px',
          left: `${currentX}px`,
          top: `${currentY}px`
        }
      ]);
    }
  }));

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
    <div className="midPanel" ref={containerRef}>
      <div>
        <h1>MidPanel</h1>
      </div>
      <div className="midItemsContainer" ref={drop}>
        {generateContent()}
      </div>
    </div>
  );
}