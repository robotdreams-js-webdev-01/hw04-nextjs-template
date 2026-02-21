import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-8 p-8">
      <h1 className="text-3xl font-bold">4. házi – Válassz játékot</h1>
      <p className="text-gray-500 text-center">
        Válaszd ki az A vagy B opciót, és valósítsd meg az egészet!
      </p>

      {/* TODO (18. óra – Next.js Link): Stílusos kártyák vagy gombok a két opcióhoz */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/game/memory"
          className="rounded-xl border-2 border-indigo-500 px-8 py-6 text-center font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors"
        >
          A opció – Memóriajáték
        </Link>
        <Link
          href="/game/timer"
          className="rounded-xl border-2 border-emerald-500 px-8 py-6 text-center font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors"
        >
          B opció – Egg Timer
        </Link>
      </div>
    </main>
  );
}
