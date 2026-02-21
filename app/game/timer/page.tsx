'use client';
// 18. óra: 'use client' szükséges, mert useState-t és useEffect-et használunk

// TODO (18. óra – React hooks): Importáld a useState-t és useEffect-et
// import { useState, useEffect } from 'react';

// TODO (18. óra – TypeScript union type): Timer állapotok
// type TimerState = 'idle' | 'running' | 'paused' | 'done';

// TODO (18. óra – useState): State a timerhez
// const [totalSeconds, setTotalSeconds] = useState<number>(60);
// const [remaining, setRemaining] = useState<number>(60);
// const [timerState, setTimerState] = useState<TimerState>('idle');

// TODO (18. óra – useEffect, setInterval cleanup): Visszaszámlálás logikája
// useEffect(() => {
//   if (timerState !== 'running') return;
//   const intervalId = setInterval(() => {
//     setRemaining((prev) => {
//       if (prev <= 1) {
//         setTimerState('done');
//         return 0;
//       }
//       return prev - 1;
//     });
//   }, 1000);
//   return () => clearInterval(intervalId);  // FONTOS: cleanup!
// }, [timerState]);

// TODO: progress kiszámítása
// const progress = totalSeconds > 0 ? Math.round((remaining / totalSeconds) * 100) : 0;

// TODO: Formázás perc:másodperc alakra
// const minutes = Math.floor(remaining / 60).toString().padStart(2, '0');
// const seconds = (remaining % 60).toString().padStart(2, '0');

export default function EggTimer() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Egg Timer</h1>

      {/* TODO: Number input vagy range slider az idő beállításához */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Idő (másodperc)
        </label>
        {/* <input type="number" min={1} max={3600} value={totalSeconds}
               onChange={(e) => { setTotalSeconds(Number(e.target.value)); setRemaining(Number(e.target.value)); }}
               className="w-full border rounded px-3 py-2" /> */}
      </div>

      {/* TODO: Visszaszámláló kijelzése (perc:másodperc) */}
      <div className="text-5xl font-mono text-center my-6">00:00</div>

      {/* TODO: Progress bar */}
      {/* <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
            <div className="h-4 bg-green-500 rounded-full transition-all"
                 style={{ width: `${progress}%` }} />
          </div> */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div className="h-4 bg-green-500 rounded-full" style={{ width: '100%' }} />
      </div>

      {/* TODO: Start / Pause / Reset gombok */}
      <div className="flex gap-3 justify-center">
        <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
          Start
        </button>
        <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
          Pause
        </button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600">
          Reset
        </button>
      </div>

      {/* TODO: Vizuális jelzés ha timerState === 'done' */}
    </div>
  );
}
