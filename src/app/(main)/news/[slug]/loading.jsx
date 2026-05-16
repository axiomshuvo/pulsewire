import { Card, CardContent, Chip, Skeleton, Spinner } from "@heroui/react";
import {
  RiArticleLine,
  RiFlashlightLine,
  RiLoader4Line,
  RiPulseLine,
} from "react-icons/ri";

const sidebarRows = [1, 2, 3];

export default function NewsLoading() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-12">
        <section className="space-y-5 lg:col-span-9">
          <Card className="rounded-[28px] border border-[#eadfd4] bg-white/82 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.45)] backdrop-blur">
            <CardContent className="space-y-4 px-5 py-5">
              <Chip
                variant="flat"
                className="border border-[#ff6b57]/15 bg-[#ff6b57]/10 text-[#ff6b57]"
              >
                <span className="inline-flex items-center gap-2 font-semibold">
                  <RiArticleLine />
                  Story File
                </span>
              </Chip>
              <Skeleton className="h-10 w-64 rounded-xl" />
            </CardContent>
          </Card>

          <Card className="rounded-[28px] border border-[#eadfd4] bg-white/90 shadow-[0_28px_70px_-52px_rgba(36,29,26,0.4)] backdrop-blur">
            <CardContent className="space-y-6 p-5 md:p-7">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-3 rounded-full border border-[#eadfd4] bg-[#fcf7f2] px-4 py-2 text-sm font-semibold text-[#6c5f58]">
                  <Spinner size="sm" />
                  Loading article
                </div>
                <span className="inline-flex items-center gap-2 text-sm text-[#8b7a72]">
                  <RiLoader4Line />
                  Updating story file
                </span>
              </div>

              <Skeleton className="h-80 w-full rounded-3xl" />
              <Skeleton className="h-10 w-5/6 rounded-xl" />

              <div className="space-y-3">
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-full rounded-lg" />
                <Skeleton className="h-4 w-11/12 rounded-lg" />
                <Skeleton className="h-4 w-9/12 rounded-lg" />
              </div>

              <Skeleton className="h-12 w-52 rounded-full" />
            </CardContent>
          </Card>
        </section>

        <aside className="lg:col-span-3">
          <Card className="rounded-[28px] border border-[#eadfd4] bg-white/82 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.45)] backdrop-blur lg:sticky lg:top-6">
            <CardContent className="space-y-5 p-5">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#241d1a] text-xl text-white">
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

              <div className="rounded-2xl border border-[#efe4da] bg-[#fcf7f2] p-4">
                <div className="flex items-center gap-3 text-sm text-[#6c5f58]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1ec] text-[#ff6b57]">
                    <RiPulseLine />
                  </span>
                  Sign-in options are loading.
                </div>
              </div>

              <div className="space-y-4">
                {sidebarRows.map((row) => (
                  <div
                    key={row}
                    className="space-y-3 rounded-2xl border border-[#efe4da] bg-[#fcf7f2] p-4"
                  >
                    <Skeleton className="h-5 w-2/3 rounded-lg" />
                    <Skeleton className="h-10 w-full rounded-xl" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
