import React from "react";
import TextComponent from "../../components/textComponent";
import './style.css';

export default function LeftPanel() {
  return (
    <div className="leftPanel">
      <div>
        <h1>LeftPanel</h1>
        <div className="leftMaterialContiner">
          <TextComponent />
          <TextComponent />
          <TextComponent />
        </div>
      </div>
    </div>
  );
}