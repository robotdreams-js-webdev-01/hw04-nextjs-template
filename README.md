# 4. házi – Next.js memóriajáték vagy Egg Timer

## Kontextus

**Kapcsolódó óra:** 18. óra – Next.js App Router, React hooks, TypeScript

---

## Tanulási célok

- Next.js App Router mappa-alapú routing (`app/` mappa, `page.tsx` konvenció)
- React function komponensek, `useState`, `useEffect`
- TypeScript interfészek és típusok (props, state, helper függvények)
- Reszponzív UI Tailwind CSS-szel (mobile-first)
- Deploy Vercelre

---

## Feladatleírás – Válassz egyet!

Valósítsd meg **teljes egészében** az **A** vagy a **B** opciót.

---

### A opció – Memóriajáték

4×4-es kártyás memóriajáték (8 pár):

- **Kártyakeverés** – véletlenszerű sorrend induláskor és reset után
- **Felfordítás logika** – egyszerre max. 2 kártya fordítható fel
- **Egyezés ellenőrzés** – egyező kártyák `isMatched: true` állapotba kerülnek és fent maradnak
- **Pontszám / lépésszámláló** – hány lépésből sikerült
- **Reset gomb** – új, kevert pakli indítása
- Opcionális: visszaszámláló timer

**Adatstruktúra:**
```typescript
interface Card {
  id: number;        // egyedi kulcs a rendereléshez
  value: string;     // ikon vagy szöveg (pl. '🍎')
  isFlipped: boolean;
  isMatched: boolean;
}
```

---

### B opció – Egg Timer

Állítható visszaszámlálós tojásfőző:

- **Időbeállítás** – number input VAGY range slider (másodpercben vagy percben)
- **Start / Pause / Reset** gombok
- **Progress bar** – vizuálisan mutatja a hátralévő időt
- **Lejárati jelzés** – vizuális (opcionálisan hangjelzés) amikor `remaining === 0`
- Opcionális: animált tojás ikon

**Állapotok:**
```typescript
type TimerState = 'idle' | 'running' | 'paused' | 'done';
```

---

## Közös követelmények

- **Next.js App Router** – `'use client'` direktíva ott ahol kell (`useState`, `useEffect`)
- **TypeScript** – minden prop és state-változó explicit típussal; `npx tsc --noEmit` hibamentesen fusson
- **Tailwind CSS** – mobile-first, utility osztályok
- **Deploy** – Vercel (ajánlott), Netlify vagy GitHub Pages; az **élő URL kerüljön a README-be**

---

## Minimum elvárások

- A választott opció alaplogikája végigvihető
- TypeScript fordítás hibamentes (`npx tsc --noEmit`)
- Deployed és elérhető élő URL

---

## Pontozás (75 pont)

| Kritérium | Pont |
|---|---|
| Játéklogika helyesen, hiánytalanul implementálva | 15p |
| State-kezelés (useState/useEffect helyes, nem okoz infinite loop) | 15p |
| TypeScript (interfészek, típusok, strict mode hibamentes) | 15p |
| UI és reszponzivitás (Tailwind, mobile-first) | 15p |
| Extra (animációk, UX finomítások, további feature, egységtesztek) | 15p |

---

## Futtatás

```bash
npm install
npm run dev
```

A fejlesztői szerver elindul: `http://localhost:3000`

TypeScript ellenőrzés:

```bash
npx tsc --noEmit
```

Build:

```bash
npm run build
```

---

## Tippek

> 💡 Nézd vissza a **18. óra diasorát** –
> `'use client'` direktíva, App Router mappastruktúra,
> `useState` inicializálás, `useEffect` cleanup!
