'use client';
// 18. óra: useState, useEffect, setInterval cleanup

// TODO [10p]: Importáld useState-et és useEffect-et.
// TODO [15p]: Timer state (beállított idő, hátralévő idő, állapot: idle/running/paused/done).
// TODO [20p]: Futó timer logika (setInterval + clearInterval cleanup), lejárat kezelése.
// TODO [15p]: Progress bar + Start/Pause/Reset + idő kijelzés (mm:ss) + reszponzív UI.

export default function EggTimer() {
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Egg Timer</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Idő (másodperc)</label>
        {/* TODO [10p]: input az idő beállításához */}
      </div>
      <div className="text-5xl font-mono text-center my-6">00:00</div>
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div className="h-4 bg-green-500 rounded-full" style={{ width: '100%' }} />
      </div>
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
    </div>
  );
}
