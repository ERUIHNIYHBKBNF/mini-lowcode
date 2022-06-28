import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { RIGHT_PANEL_TYPE, ElementType, COMPONENT_TYPE } from "../../consts/types";
import './style.css';

type DrawPanelProps = {
  data: Array<ElementType>;
  setData: Function;
  setRightPanelType: Function;
  setRightRanelElementId: Function;
}

type TextComponentDropedProps = {
  item: ElementType;
  setRightPanelType: Function;
  setRightRanelElementId: Function;
};

function TextComponentDroped({
  item,
  setRightPanelType,
  setRightRanelElementId
}: TextComponentDropedProps) {
  const [, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.TEXT_DROPED,
    item: { id: item.id },
  }));
  return (
    <div
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
      ref={drag}
    >
      {item.data}
    </div>
  );
}

export default function MidPanel({data, setRightPanelType, setRightRanelElementId, setData}: DrawPanelProps) {
  const findCurrentElement = (id: string) => {
    return data.find((item: ElementType) => item.id === id);
  }

  const changeElementData = (id: string, key: string, newData: any) => {
    const element = findCurrentElement(id);
    if (element) {
      element[key] = newData;
      setData([...data]);
    }
  }

  const containerRef = React.useRef<HTMLDivElement>(null);

  const [, drop] = useDrop(() => ({
    accept: [COMPONENT_TYPE.TEXT, COMPONENT_TYPE.TEXT_DROPED], // drop接受的type
    drop: (_, monitor) => {
      const { x, y } = monitor.getSourceClientOffset()!; // 相对屏幕左上角的位置
      // 计算相对容器左上角的位置
      const [currentX, currentY] = [x - containerRef.current!.offsetLeft, y - 75];
      switch (monitor.getItemType()) {
        case COMPONENT_TYPE.TEXT:
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
          return;
        case COMPONENT_TYPE.TEXT_DROPED:
          console.log(monitor.getItem());
          changeElementData((monitor.getItem() as { id: string }).id, 'left', `${currentX}px`);
          changeElementData((monitor.getItem() as { id: string }).id, 'top', `${currentY}px`);
          return;
      }
    }
  }));

  const generateContent = () => {
    const ret = [];
    for (const item of data) {
      switch (item.type) {
        case 'text':
          ret.push(
            <TextComponentDroped
              key={item.id}
              item={item}
              setRightPanelType={setRightPanelType}
              setRightRanelElementId={setRightRanelElementId}
            />
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