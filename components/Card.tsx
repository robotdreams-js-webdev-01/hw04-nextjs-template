// TODO (18. óra – TypeScript): Bővítsd ki a Card interfészt és a CardProps-t igény szerint

// Alap Card interfész – importálható a memory/page.tsx-ből vagy definiálható itt
export interface Card {
  id: number;
  value: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface CardProps {
  card: Card;
  onClick: () => void;
}

// TODO (18. óra – Conditional rendering): Vizuális flip megjelenítés
//   isFlipped && !isMatched → más háttér/ikon megjelenítése
//   isMatched → zöld / halvány befejezett állapot

export default function Card({ card, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer w-16 h-16 flex items-center justify-center
                 rounded-lg border-2 select-none text-2xl"
    >
      {/* TODO: kártya tartalom megjelenítése feltételesen:
            ha card.isFlipped || card.isMatched → card.value
            egyébként → '?' vagy hátlap design */}
    </div>
  );
}
