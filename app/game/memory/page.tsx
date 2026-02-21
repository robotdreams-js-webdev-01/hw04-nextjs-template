'use client';
// 18. óra: 'use client' szükséges, mert useState-t és useEffect-et használunk

// TODO (18. óra – React hooks): Importáld a useState-t és useEffect-et
// import { useState, useEffect } from 'react';

// TODO (18. óra – TypeScript): Definiálj Card interfészt:
// interface Card {
//   id: number;        // egyedi kulcs a rendereléshez
//   value: string;     // az ikon vagy szöveg amit mutat a kártya
//   isFlipped: boolean;
//   isMatched: boolean;
// }

// TODO: Inicializáló függvény – 8 pár generálása és véletlenszerű keverése
// const EMOJI_PAIRS = ['🍎','🍊','🍋','🍇','🍓','🍒','🥝','🍍'];
// function initCards(): Card[] {
//   const pairs = [...EMOJI_PAIRS, ...EMOJI_PAIRS];
//   return pairs
//     .sort(() => Math.random() - 0.5)
//     .map((value, index) => ({ id: index, value, isFlipped: false, isMatched: false }));
// }

// TODO (18. óra – useState): State a kártyák tömbjéhez és a felfordított kártyákhoz
// const [cards, setCards] = useState<Card[]>(initCards);
// const [flipped, setFlipped] = useState<number[]>([]);
// const [moves, setMoves] = useState<number>(0);

// TODO (18. óra – useEffect, dependency array, cleanup): Egyezés ellenőrzése
// useEffect(() => {
//   if (flipped.length !== 2) return;
//   const [firstId, secondId] = flipped;
//   const first = cards.find((c) => c.id === firstId)!;
//   const second = cards.find((c) => c.id === secondId)!;
//   if (first.value === second.value) {
//     setCards((prev) =>
//       prev.map((c) => (c.id === firstId || c.id === secondId ? { ...c, isMatched: true } : c))
//     );
//     setFlipped([]);
//   } else {
//     const timer = setTimeout(() => {
//       setCards((prev) =>
//         prev.map((c) => (c.id === firstId || c.id === secondId ? { ...c, isFlipped: false } : c))
//       );
//       setFlipped([]);
//     }, 1000);
//     return () => clearTimeout(timer);  // cleanup!
//   }
// }, [flipped]);

// TODO: handleCardClick(id: number): void
// function handleCardClick(id: number): void {
//   const card = cards.find((c) => c.id === id);
//   if (!card || card.isFlipped || card.isMatched || flipped.length === 2) return;
//   setCards((prev) => prev.map((c) => (c.id === id ? { ...c, isFlipped: true } : c)));
//   setFlipped((prev) => [...prev, id]);
//   setMoves((prev) => prev + 1);
// }

export default function MemoryGame() {
  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-2">Memóriajáték</h1>

      {/* TODO: Lépésszámláló kijelzése */}
      <p className="text-gray-500 mb-4">Lépések: 0</p>

      {/* TODO (18. óra – Grid layout): 4×4-es kártyarács renderelése */}
      {/* grid grid-cols-4 gap-3 */}
      <div className="grid grid-cols-4 gap-3">
        {/* TODO: cards.map((card) => (
          <Card key={card.id} card={card} onClick={() => handleCardClick(card.id)} />
        )) */}
      </div>

      {/* TODO: Reset gomb – setCards(initCards()), setFlipped([]), setMoves(0) */}
      <button className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
        Újrakezdés
      </button>
    </div>
  );
}
