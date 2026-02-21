'use client';
// 18. óra: useState, useEffect, TypeScript típusok

// TODO [10p]: Importáld useState-et és useEffect-et.
// TODO [10p]: Definiálj Card típust (id, value, isFlipped, isMatched), és készíts 8 pár kevert kártyát.
// TODO [15p]: State + kattintási logika (max 2 felfordított kártya, lépésszám).
// TODO [15p]: Egyezésellenőrzés useEffect-ben, nem egyezésnél visszafordítás (setTimeout + cleanup).
// TODO [10p]: Kártyák renderelése + reset gomb + felhasználói visszajelzés.

export default function MemoryGame() {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-2">Memóriajáték</h1>
      <p className="text-gray-500 mb-4">Lépések: 0</p>
      <div className="grid grid-cols-4 gap-3">
        {/* TODO [15p]: Kártyák renderelése; minden kártya kattintható. */}
      </div>
      <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Újrakezdés
      </button>
    </div>
  );
}
