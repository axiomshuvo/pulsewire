import { Card, CardContent, Chip, Skeleton, Spinner } from "@heroui/react";
import {
  RiArticleLine,
  RiFlashlightLine,
  RiLoader4Line,
  RiPulseLine,
} from "react-icons/ri";

const placeholderCards = [1, 2, 3];
const sidebarRows = [1, 2, 3, 4, 5];

export default function CategoryLoading() {
  return (
    <div className="container mx-auto grid gap-6 px-4 py-8 lg:grid-cols-12">
      <aside className="hidden lg:col-span-3 lg:block">
        <Card className="rounded-[28px] border border-[#eadfd4] bg-white/82 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.45)] backdrop-blur">
          <CardContent className="space-y-5 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#ff6b57]/10 text-xl text-[#ff6b57]">
                <RiPulseLine />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7a72]">
                  Sections
                </p>
                <h2 className="mt-1 text-lg font-bold text-[#241d1a]">
                  Loading categories
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {sidebarRows.map((row) => (
                <div
                  key={row}
                  className="rounded-2xl border border-[#efe4da] bg-[#fcf7f2] p-3"
                >
                  <Skeleton className="h-4 w-2/3 rounded-lg" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </aside>

      <section className="space-y-5 lg:col-span-6">
        <Card className="rounded-[28px] border border-[#eadfd4] bg-white/82 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.45)] backdrop-blur">
          <CardContent className="space-y-6 p-5 md:p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <Chip
                  variant="flat"
                  className="border border-[#ff6b57]/15 bg-[#ff6b57]/10 text-[#ff6b57]"
                >
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <RiArticleLine />
                    PulseWire Live
                  </span>
                </Chip>
                <h1 className="mt-4 text-2xl font-bold tracking-tight text-[#241d1a] md:text-3xl">
                  Loading category news
                </h1>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[#6c5f58] md:text-base">
                  Fetching the latest headlines, summaries, and sidebar updates
                  for this section.
                </p>
              </div>

              <div className="inline-flex items-center gap-3 rounded-full border border-[#eadfd4] bg-[#fcf7f2] px-4 py-2 text-sm font-semibold text-[#6c5f58]">
                <Spinner size="sm" />
                Updating feed
              </div>
            </div>

            <div className="space-y-4">
              {placeholderCards.map((card) => (
                <Card
                  key={card}
                  className="rounded-[24px] border border-[#efe4da] bg-[#fcf7f2] shadow-none"
                >
                  <CardContent className="space-y-5 p-5">
                    <div className="flex items-center gap-3 text-sm text-[#8b7a72]">
                      <RiLoader4Line className="text-base" />
                      <Skeleton className="h-4 w-28 rounded-lg" />
                    </div>

                    <Skeleton className="h-7 w-5/6 rounded-xl" />

                    <div className="space-y-3">
                      <Skeleton className="h-4 w-full rounded-lg" />
                      <Skeleton className="h-4 w-full rounded-lg" />
                      <Skeleton className="h-4 w-3/4 rounded-lg" />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-[180px_1fr]">
                      <Skeleton className="h-32 rounded-2xl" />
                      <div className="space-y-3">
                        <Skeleton className="h-4 w-full rounded-lg" />
                        <Skeleton className="h-4 w-11/12 rounded-lg" />
                        <Skeleton className="h-4 w-8/12 rounded-lg" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <aside className="hidden lg:col-span-3 lg:block">
        <Card className="rounded-[28px] border border-[#eadfd4] bg-white/82 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.45)] backdrop-blur">
          <CardContent className="space-y-5 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-xl text-white">
                <RiFlashlightLine />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8b7a72]">
                  Sidebar
                </p>
                <h2 className="mt-1 text-lg font-bold text-[#241d1a]">
                  Loading extras
                </h2>
              </div>
            </div>

            <Skeleton className="h-40 rounded-3xl" />

            <div className="space-y-4">
              {sidebarRows.slice(0, 4).map((row) => (
                <div key={row} className="space-y-2">
                  <Skeleton className="h-4 w-10/12 rounded-lg" />
                  <Skeleton className="h-4 w-8/12 rounded-lg" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
