const fs = require('fs');
const path = require('path');

const hwId = 'hw04';
const hintLevel = process.env.HINT_LEVEL;

const hints = {
  '1': "💡 Nézd meg a 18. óra diasorát – 'use client' direktíva, App Router mappastruktúra, useState inicializálás!",
  '2': "💡 Memóriajátéknál: két useState kell – az egyik a kártyák tömbjét, a másik az éppen felfordított (de még nem matched) kártyák id-jeit tárolja. Egg timernél: useEffect-ben setInterval, return clearInterval(id) a cleanup.",
  '3': "💡 Memória: setTimeout-tal 1s után ellenőrizd az egyezést, ha nem egyeznek: setCards-szal isFlipped: false visszaállítás. Timer: progress = Math.round((remaining / total) * 100); ezt add a progress bar style width-jébe.",
};

const hintText = hints[hintLevel];
if (!hintText) {
  console.error(`Ismeretlen hint szint: ${hintLevel}`);
  process.exit(1);
}

// Read hints-usage.json
let hintsData;
try {
  const raw = fs.readFileSync(path.join(process.cwd(), 'hints-usage.json'), 'utf8');
  hintsData = JSON.parse(raw);
} catch {
  hintsData = {};
}

// Increment usage counter
if (!hintsData[hwId]) {
  hintsData[hwId] = { usedHints: 0 };
}
hintsData[hwId].usedHints += 1;

// Append hint to GitHub Step Summary
const summary = `## 💡 Hint ${hintLevel} – 4. házi\n\n${hintText}\n\n> Felhasznált hintek száma: ${hintsData[hwId].usedHints}\n`;
fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);

// Write updated hints-usage.json
fs.writeFileSync(
  path.join(process.cwd(), 'hints-usage.json'),
  JSON.stringify(hintsData, null, 2)
);

console.log(`Hint ${hintLevel} megjelenítve. Összes felhasznált hint (${hwId}): ${hintsData[hwId].usedHints}`);
