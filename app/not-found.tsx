import Link from 'next/link';

// Custom 404 - on-brand, with a way back to the key pages.

const LINKS: { href: string; label: string }[] = [
  { href: '/', label: 'The fund hub' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/leaderboard', label: 'Leaderboard' },
  { href: '/rally', label: 'Rally the crew' },
  { href: '/apply', label: 'Artists: apply' },
];

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col justify-center px-5 py-12">
      <div
        style={{ letterSpacing: 4 }}
        className="text-sm font-bold uppercase text-[#f5a623]"
      >
        The ZAO on Artizen
      </div>
      <h1 className="mt-3 text-4xl font-bold">Lost the thread.</h1>
      <p className="mt-3 text-white/60">
        That page is not here. The match funding is, though - head back and put it to work.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-[#f5a623]/40 hover:text-[#f5a623]"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </main>
  );
}
