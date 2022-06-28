import React from "react";
import { RIGHT_PANEL_TYPE, ElementType } from "../../consts/types";
import './style.css';

type RightPanelProps = {
  type: RIGHT_PANEL_TYPE;
  data: Array<ElementType>;
  elementId: string;
  setDrawPanelData: Function;
};

export default function RightPanel({
  type,
  data,
  elementId,
  setDrawPanelData
}: RightPanelProps) {
  const findCurrentElement = (id: string) => {
    return data.find((item: ElementType) => item.id === id);
  }

  const changeElementData = (id: string, key: string, newData: any) => {
    const element = findCurrentElement(id);
    if (element) {
      element[key] = newData;
      setDrawPanelData([...data]);
    }
  }

  const generateRightPanel = () => {
    if (type === RIGHT_PANEL_TYPE.NONE) {
      return <div>属性编辑区</div>;
    }
    switch (type) {
      case RIGHT_PANEL_TYPE.TEXT:
        const elementData = findCurrentElement(elementId);
        if (!elementData) {
          return <div>属性编辑区</div>;
        }
        const inputDomObject: Array<HTMLInputElement> = [];

        return (
          <div key={elementId}>
            <div>文字元素</div>
            <br />
            <div className="flex-row-space-between text-config-item">
              <div>文字内容:</div>
              <input
                defaultValue={elementData.data}
                ref={(element) => {
                  inputDomObject[0] = element!;
                }}
                type="text"
              ></input>
            </div>
            <div className="flex-row-space-between text-config-item">
              <div>文字颜色:</div>
              <input
                defaultValue={elementData.color}
                ref={(element) => {
                  inputDomObject[1] = element!;
                }}
                type="text"
              ></input>
            </div>
            <div className="flex-row-space-between text-config-item">
              <div>文字大小:</div>
              <input
                defaultValue={elementData.size}
                ref={(element) => {
                  inputDomObject[2] = element!;
                }}
                type="text"
              ></input>
            </div>
            <div className="flex-row-space-between text-config-item">
              <div>width:</div>
              <input
                defaultValue={elementData.width}
                ref={(element) => {
                  inputDomObject[3] = element!;
                }}
                type="text"
              ></input>
            </div>
            <div className="flex-row-space-between text-config-item">
              <div>height:</div>
              <input
                defaultValue={elementData.height}
                ref={(element) => {
                  inputDomObject[4] = element!;
                }}
                type="text"
              ></input>
            </div>
            <div className="flex-row-space-between text-config-item">
              <div>top:</div>
              <input
                defaultValue={elementData.top}
                ref={(element) => {
                  inputDomObject[5] = element!;
                }}
                type="text"
              ></input>
            </div>
            <div className="flex-row-space-between text-config-item">
              <div>left:</div>
              <input
                defaultValue={elementData.left}
                ref={(element) => {
                  inputDomObject[6] = element!;
                }}
                type="text"
              ></input>
            </div>
            <br />
            <button
              onClick={() => {
                changeElementData(elementId, 'data', inputDomObject[0].value);
                changeElementData(elementId, 'color', inputDomObject[1].value);
                changeElementData(elementId, 'size', inputDomObject[2].value);
                changeElementData(elementId, 'width', inputDomObject[3].value);
                changeElementData(elementId, 'height', inputDomObject[4].value);
                changeElementData(elementId, 'top', inputDomObject[5].value);
                changeElementData(elementId, 'left', inputDomObject[6].value);
              }}
            >
              确定
            </button>
          </div>
        );
    }
  };

  return (
    <div className="rightPanel">
      <div>
        <h1>RightPanel</h1>
      </div>
      <div className="rightFormContainer">
        {generateRightPanel()}
      </div>
    </div>
  );
}