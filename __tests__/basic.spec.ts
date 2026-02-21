import fs from 'fs';

describe('HW04 – alapvető ellenőrzések', () => {
  test('app/game/memory/page.tsx exists', () => {
    expect(fs.existsSync('./app/game/memory/page.tsx')).toBe(true);
  });

  test('app/game/timer/page.tsx exists', () => {
    expect(fs.existsSync('./app/game/timer/page.tsx')).toBe(true);
  });

  test('memory page references useState', () => {
    const code = fs.readFileSync('./app/game/memory/page.tsx', 'utf8');
    expect(code.includes('useState')).toBe(true);
  });
});
