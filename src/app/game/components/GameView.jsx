'use client';

import { Stage, Sprite, Text } from '@pixi/react';
import { useState } from 'react';

export default function GameView() {
  const [x, setX] = useState(100);

  return (
    <Stage width={600} height={400} options={{ backgroundColor: 0x1099bb }}>
      <Text text="🐰 Bunny Click Game" x={180} y={20} style={{ fill: 'white', fontSize: 28 }} />
      <Sprite
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OdB5gb7tFhHzvwi9PkQKFjaA3Rfz3EOPvA&s"
        x={x}
        y={150}
        interactive
        pointerdown={() => setX((prev) => prev + 20)}
      />
    </Stage>
  );
}
