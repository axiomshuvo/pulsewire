import { Card, CardContent, Chip } from "@heroui/react";
import Link from "next/link";
import {
  RiAlertLine,
  RiArrowLeftLine,
  RiCompass3Line,
  RiPulseLine,
} from "react-icons/ri";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[68vh] items-center justify-center overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255, 107, 87, 0.18), transparent 34%), radial-gradient(circle at 85% 12%, rgba(36, 29, 26, 0.08), transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.4), rgba(255,253,251,0.92))",
        }}
      />

      <Card className="relative w-full max-w-3xl rounded-[32px] border border-[#eadfd4] bg-white/88 shadow-[0_30px_80px_-48px_rgba(36,29,26,0.35)] backdrop-blur">
        <CardContent className="p-6 sm:p-10">
          <Chip
            variant="flat"
            className="border border-[#ff6b57]/20 bg-[#fff1ec] text-[#ff6b57]"
          >
            <span className="inline-flex items-center gap-2 font-semibold uppercase tracking-[0.22em]">
              <RiCompass3Line />
              404 | Story Missing
            </span>
          </Chip>

          <h1 className="mt-5 text-3xl font-semibold leading-tight text-[#241d1a] sm:text-5xl">
            This page missed the final edition.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6c5f58] sm:text-base">
            The link may be outdated, or the article might have moved. PulseWire
            is still live, and you can jump back to current headlines in one
            click.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-[#241d1a] px-5 text-sm font-medium text-white transition hover:bg-[#ff6b57]"
            >
              <RiArrowLeftLine className="text-lg" />
              Back to Front Page
            </Link>
          </div>

          <div className="mt-8 grid gap-3 text-xs sm:grid-cols-3 sm:text-sm">
            <div className="rounded-2xl border border-[#eadfd4] bg-[#fcf7f2] px-4 py-3 text-[#6c5f58]">
              <span className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1ec] text-[#ff6b57]">
                <RiPulseLine />
              </span>
              <p>Breaking stories update every few minutes.</p>
            </div>
            <div className="rounded-2xl border border-[#eadfd4] bg-[#fcf7f2] px-4 py-3 text-[#6c5f58]">
              <span className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f4ece5] text-[#241d1a]">
                <RiCompass3Line />
              </span>
              <p>Browse featured cards from the main layout.</p>
            </div>
            <div className="rounded-2xl border border-[#eadfd4] bg-[#fcf7f2] px-4 py-3 text-[#6c5f58]">
              <span className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f6dfd8] text-[#aa5641]">
                <RiAlertLine />
              </span>
              <p>Need help? Return to the front page navigation.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
