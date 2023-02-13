import React, { useContext, useState } from 'react';
import { Context } from '../08-pixel-art/ContextComponent';

function ColorPicker() {
  const { setTheColor } = useContext(Context);
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple'];
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map((color) => (
        <button
          key={color}
          style={{ backgroundColor: color }}
          onClick={() => setTheColor(color)}
        />
      ))}
    </div>
  );
}

function Pixel() {
  const { theColor } = useContext(Context);
  let lightGrey = 'lightGrey';
  const [bgColor, setBgColor] = useState(lightGrey);
  const changeColor = () => {
    setBgColor(theColor);
  };

  return (
    <div
      style={{
        height: '20px',
        width: '20px',
        backgroundColor: bgColor,
        margin: '1px',
      }}
      onClick={changeColor}
    />
  );
}

function Pixels() {
  const pixels = [];
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />);
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        width: '210px',
        margin: '0 auto',
      }}
    >
      {pixels}
    </div>
  );
}

export default function PixelArt() {
  return (
    <div>
      <ColorPicker />
      <Pixels />
    </div>
  );
}
