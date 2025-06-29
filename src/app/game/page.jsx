// app/game/page.jsx
import dynamic from 'next/dynamic';

// Dynamically import GameView with SSR disabled
const GameView = dynamic(() => import('./components/GameView'), { ssr: false });

export default function GamePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <GameView />
    </div>
  );
}
