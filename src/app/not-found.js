import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[68vh] items-center justify-center overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(20,184,166,0.22),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(34,197,94,0.2),transparent_45%),linear-gradient(to_bottom,rgba(255,255,255,0.6),rgba(255,255,255,0.95))]"
      />

      <section className="relative w-full max-w-3xl rounded-3xl border border-black/10 bg-white/90 p-6 shadow-[0_20px_70px_rgba(7,15,25,0.14)] backdrop-blur sm:p-10">
        <p className="inline-flex rounded-full border border-black/10 bg-black/5 px-3 py-1 text-xs tracking-[0.2em] text-black/65 uppercase">
          404 | Story Missing
        </p>

        <h1 className="mt-4 text-3xl leading-tight font-semibold text-black sm:text-5xl">
          This page didn&apos;t make today&apos;s edition.
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-black/70 sm:text-base">
          The link may be outdated, or the article might have moved. PulseWire
          is still live, and you can jump back to current headlines in one
          click.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-black/85"
          >
            Back to Front Page
          </Link>
        </div>

        <div className="mt-8 grid gap-3 text-xs text-black/60 sm:grid-cols-3 sm:text-sm">
          <div className="rounded-xl border border-black/10 bg-black/2 px-3 py-2">
            Breaking stories update every few minutes.
          </div>
          <div className="rounded-xl border border-black/10 bg-black/2 px-3 py-2">
            Browse featured cards from the main layout.
          </div>
          <div className="rounded-xl border border-black/10 bg-black/2 px-3 py-2">
            Need help? Return to the front page navigation.
          </div>
        </div>
      </section>
    </main>
  );
}
