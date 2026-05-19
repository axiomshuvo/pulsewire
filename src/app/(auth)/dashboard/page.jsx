import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  RiArrowRightLine,
  RiBookmarkLine,
  RiCompass3Line,
  RiNotification3Line,
  RiPulseLine,
  RiTimeLine,
} from "react-icons/ri";

export const metadata = {
  title: "Dashboard | PulseWire",
  description:
    "Track your saved reads, reading rhythm, and newsroom preferences from your PulseWire dashboard.",
};

const statCards = [
  {
    label: "Saved stories",
    value: "24",
    note: "+6 this week",
    icon: RiBookmarkLine,
    iconClassName: "bg-[#fff1ec] text-[#ff6b57]",
  },
  {
    label: "Reading streak",
    value: "12 days",
    note: "Strong consistency",
    icon: RiPulseLine,
    iconClassName: "bg-[#f4efe8] text-[#241d1a]",
  },
  {
    label: "Alerts enabled",
    value: "8 topics",
    note: "Politics, Tech, Business",
    icon: RiNotification3Line,
    iconClassName: "bg-[#fff6df] text-[#a56a12]",
  },
];

const readingQueue = [
  {
    title: "Election reform explained in plain language",
    meta: "Politics • 6 min read",
    status: "Continue reading",
  },
  {
    title: "Why AI chips are becoming the new oil",
    meta: "Technology • 8 min read",
    status: "Saved for later",
  },
  {
    title: "The climate cost of global shipping routes",
    meta: "World • 5 min read",
    status: "Recommended",
  },
];

const activityFeed = [
  {
    title: "Morning briefing opened",
    time: "2 hours ago",
  },
  {
    title: "Saved a story from Technology",
    time: "Yesterday",
  },
  {
    title: "Updated preferred reading topics",
    time: "2 days ago",
  },
];

const quickActions = [
  {
    label: "Browse top headlines",
    href: "/category/01",
  },
  {
    label: "Open your saved stories",
    href: "/category/01",
  },
  {
    label: "Explore latest deep dives",
    href: "/about",
  },
];

export default async function DashBoardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const userName = session.user.name || "Reader";
  const userInitials = userName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <main className="relative isolate overflow-hidden px-4 py-8 md:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255, 107, 87, 0.18), transparent 42%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(36, 29, 26, 0.12), transparent 68%)",
        }}
      />

      <div className="container mx-auto">
        <div className="rounded-[34px] border border-white/70 bg-white/78 p-4 shadow-[0_30px_90px_-54px_rgba(36,29,26,0.45)] backdrop-blur md:p-6">
          <section className="grid gap-5 border-b border-[#eadfd4] pb-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[28px] border border-[#efe4da] bg-[linear-gradient(180deg,#fffdfb_0%,#fbf6f1_100%)] p-6 md:p-8">
              <span className="inline-flex items-center rounded-full border border-[#ff6b57]/20 bg-[#fff1ec] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#c44d3d]">
                Reader Desk
              </span>

              <h1 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-[#241d1a] md:text-[3rem]">
                Your personal newsroom, organized around what matters to you.
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6c5f58] md:text-[15px]">
                Keep an eye on your reading rhythm, saved stories, and editorial
                priorities without leaving the PulseWire world.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/category/01"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#241d1a] px-5 text-sm font-semibold text-white transition hover:bg-[#ff6b57]"
                >
                  Explore headlines
                  <RiArrowRightLine className="text-base" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#eadfd4] bg-white px-5 text-sm font-semibold text-[#241d1a] transition hover:border-[#ff6b57]/30 hover:text-[#ff6b57]"
                >
                  Editorial overview
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#241d1a] p-6 text-white shadow-[0_24px_70px_-40px_rgba(36,29,26,0.75)]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#d8c9c1]">
                  Profile Snapshot
                </span>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-sm font-bold">
                  {userInitials}
                </span>
              </div>

              <h2 className="mt-6 text-2xl font-semibold tracking-tight">
                {userName}
              </h2>
              <p className="mt-2 text-sm leading-7 text-[#d7c8c1]">
                Reader profile active with custom story tracking and briefing
                alerts.
              </p>

              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#cdbeb6]">
                    Preferred desk
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Politics, Technology, Business
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#cdbeb6]">
                    Daily rhythm
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    Morning brief + evening catch-up
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-6 grid gap-4 md:grid-cols-3">
            {statCards.map(
              ({ icon: Icon, iconClassName, label, note, value }) => (
                <div
                  key={label}
                  className="rounded-[26px] border border-[#eadfd4] bg-[#fffdfb] p-5 shadow-[0_18px_45px_-38px_rgba(36,29,26,0.4)]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#8b7a72]">
                        {label}
                      </p>
                      <p className="mt-3 text-3xl font-bold tracking-tight text-[#241d1a]">
                        {value}
                      </p>
                      <p className="mt-2 text-sm text-[#6c5f58]">{note}</p>
                    </div>

                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl text-xl ${iconClassName}`}
                    >
                      <Icon />
                    </span>
                  </div>
                </div>
              ),
            )}
          </section>

          <section className="mt-6 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="rounded-[28px] border border-[#eadfd4] bg-[#fffdfb] p-5 md:p-6">
                <div className="flex flex-col gap-3 border-b border-[#eadfd4] pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#8b7a72]">
                      Reading Queue
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[#241d1a]">
                      Pick up where you left off
                    </h3>
                  </div>
                  <Link
                    href="/category/01"
                    className="text-sm font-semibold text-[#ff6b57] transition hover:text-[#ff5a43]"
                  >
                    View all
                  </Link>
                </div>

                <div className="mt-5 space-y-3">
                  {readingQueue.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-[#efe4da] bg-white p-4 transition hover:border-[#ff6b57]/25"
                    >
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h4 className="text-base font-semibold text-[#241d1a]">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm text-[#6c5f58]">
                            {item.meta}
                          </p>
                        </div>

                        <span className="inline-flex w-fit items-center rounded-full border border-[#eadfd4] bg-[#fbf7f3] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7d6e66]">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-[#eadfd4] bg-[#fffdfb] p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1ec] text-lg text-[#ff6b57]">
                    <RiTimeLine />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#8b7a72]">
                      Recent Activity
                    </p>
                    <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[#241d1a]">
                      Your newsroom timeline
                    </h3>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {activityFeed.map((item) => (
                    <div
                      key={`${item.title}-${item.time}`}
                      className="flex gap-4"
                    >
                      <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-[#ff6b57]" />
                      <div className="border-b border-[#f0e6de] pb-4 last:border-b-0 last:pb-0">
                        <p className="font-semibold text-[#241d1a]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-sm text-[#8b7a72]">
                          {item.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[28px] border border-[#eadfd4] bg-[linear-gradient(180deg,#fff8f5_0%,#fffdfb_100%)] p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff1ec] text-lg text-[#ff6b57]">
                    <RiTimeLine />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#8b7a72]">
                      Today’s Brief
                    </p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#241d1a]">
                      Editorial rhythm
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl border border-[#eadfd4] bg-white px-4 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8b7a72]">
                      Best reading window
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#241d1a]">
                      7:30 AM to 9:00 AM
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#eadfd4] bg-white px-4 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8b7a72]">
                      Top desk today
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#241d1a]">
                      Politics is leading your recommendations
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[#eadfd4] bg-white px-4 py-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#8b7a72]">
                      Focus mode
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[#241d1a]">
                      Long-form stories prioritized
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#eadfd4] bg-[#fffdfb] p-5 md:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4efe8] text-lg text-[#241d1a]">
                    <RiCompass3Line />
                  </span>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.26em] text-[#8b7a72]">
                      Quick Actions
                    </p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#241d1a]">
                      Move faster
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="flex items-center justify-between rounded-2xl border border-[#efe4da] bg-white px-4 py-3 text-sm font-semibold text-[#241d1a] transition hover:border-[#ff6b57]/25 hover:text-[#ff6b57]"
                    >
                      <span>{action.label}</span>
                      <RiArrowRightLine className="text-base" />
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </section>
        </div>
      </div>
    </main>
  );
}
