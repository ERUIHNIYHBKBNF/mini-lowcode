import React from 'react';
import { useDrag } from 'react-dnd';
import { COMPONENT_TYPE } from '../../consts/types';
import './style.css';

export default function TextComponent() {
  const [, drag] = useDrag(() => ({
    type: COMPONENT_TYPE.TEXT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  
  return (
    <div className="textComponent" ref={drag}>
      文字组件
    </div>
  );
}