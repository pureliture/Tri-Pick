import { React } from 'react';
import './RadiusRect.css';

const RadiusRect = ({
  children,
  width = '360px',
  height,
  backgroundColor = 'white',
  color = 'black',
  border = 'none',
  margin,
  onClick,
}) => {
  return (
    <div
      className="radius_rect"
      style={{ width, height, backgroundColor, color, border, margin }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default RadiusRect;
