export const metadata = {
  title: "About PulseWire",
  description:
    "Learn about PulseWire, our mission, editorial values, newsroom history, and the journalists behind our independent reporting.",
};

const stats = [
  { value: "2019", label: "Founded" },
  { value: "4.2M+", label: "Monthly Readers" },
  { value: "180+", label: "Countries Reached" },
  { value: "95+", label: "Journalists" },
];

const values = [
  {
    title: "Truth Above All",
    description:
      "Every story we publish is fact-checked, sourced, and verified before it reaches you. We never sacrifice accuracy for speed.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Editorial Independence",
    description:
      "Our newsroom operates free from political or corporate influence. Our editors answer to readers — not advertisers.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Public Interest First",
    description:
      "We prioritize stories that matter to communities. Our reporting holds power accountable and gives voice to the unheard.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "We publish corrections openly and communicate our editorial processes with our audience. Accountability starts with us.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Amara Osei",
    role: "Editor-in-Chief",
    bio: "20 years covering conflict zones and international politics. Pulitzer finalist, 2021.",
    initial: "AO",
    color: "bg-[#f6dfd8] text-[#aa5641]",
  },
  {
    name: "Marcus Rivera",
    role: "Investigative Lead",
    bio: "Former financial analyst turned journalist. Specializes in corporate accountability reporting.",
    initial: "MR",
    color: "bg-[#ece5d6] text-[#7d6346]",
  },
  {
    name: "Priya Nair",
    role: "Technology Editor",
    bio: "Covers AI, data privacy, and the impact of Big Tech on democracy and society.",
    initial: "PN",
    color: "bg-[#ece6ef] text-[#6c5b78]",
  },
  {
    name: "James Calloway",
    role: "Politics Correspondent",
    bio: "Based in Washington D.C. with 15 years of Capitol Hill and White House reporting.",
    initial: "JC",
    color: "bg-[#f4e8d3] text-[#966735]",
  },
  {
    name: "Sofia Mensah",
    role: "Climate Reporter",
    bio: "Award-winning environmental journalist covering the frontlines of the global climate crisis.",
    initial: "SM",
    color: "bg-[#deece5] text-[#4d6a5d]",
  },
  {
    name: "Ryo Tanaka",
    role: "Asia-Pacific Bureau Chief",
    bio: "Tokyo-based correspondent with deep expertise in geopolitics across East and Southeast Asia.",
    initial: "RT",
    color: "bg-[#f4dfdf] text-[#8d5252]",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-16 text-[#241d1a]">
      {/* Hero */}
      <section className="bg-[linear-gradient(180deg,#241d1a_0%,#342822_100%)] px-4 py-20 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-block rounded-full border border-[#ff6b57]/25 bg-[#ff6b57]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff9f92]">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Journalism Without Fear or Favour
          </h1>
          <p className="text-lg leading-relaxed text-[#d7cbc4]">
            PulseWire was founded on a single belief: the public deserves
            honest, independent reporting. We cover what matters — from local
            communities to global crises — with rigour, empathy, and an
            unwavering commitment to the truth.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-[#eadfd4] bg-white/55 backdrop-blur">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 divide-x divide-y divide-[#eadfd4] md:grid-cols-4 md:divide-y-0">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-10 px-6 text-center"
              >
                <span className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </span>
                <span className="mt-1 text-sm uppercase tracking-wide text-[#7a6c65]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-5 text-3xl font-bold text-[#241d1a]">
              Our Story
            </h2>
            <p className="mb-4 leading-relaxed text-[#6c5f58]">
              PulseWire started in 2019 as a small investigative desk with five
              journalists determined to cut through noise and hold power
              accountable. Our first major exposé — a series on municipal
              corruption — won regional recognition and proved that independent
              journalism could still make an impact.
            </p>
            <p className="mb-4 leading-relaxed text-[#6c5f58]">
              Today, we&apos;ve grown into a global newsroom with correspondents
              across six continents. But our DNA hasn&apos;t changed. We still
              operate as an independent publication funded by reader
              subscriptions — never by government or corporate grants with
              strings attached.
            </p>
            <p className="leading-relaxed text-[#6c5f58]">
              Our revenue model is simple: readers who believe in independent
              journalism support the work. This keeps our reporting beholden to
              no one but the truth.
            </p>
          </div>
          <div className="space-y-5 rounded-[28px] border border-[#ecdfd4] bg-[#fffaf5] p-8 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.4)]">
            <div className="flex gap-4 items-start">
              <span className="min-w-12 text-lg font-bold text-[#ff6b57]">
                2019
              </span>
              <p className="text-sm leading-relaxed text-[#5e534d]">
                Founded in New York City with a five-person investigative team.
              </p>
            </div>
            <div className="border-t border-[#eadfd4]" />
            <div className="flex gap-4 items-start">
              <span className="min-w-12 text-lg font-bold text-[#ff6b57]">
                2021
              </span>
              <p className="text-sm leading-relaxed text-[#5e534d]">
                Expanded to international coverage with bureaus in London and
                Nairobi.
              </p>
            </div>
            <div className="border-t border-[#eadfd4]" />
            <div className="flex gap-4 items-start">
              <span className="min-w-12 text-lg font-bold text-[#ff6b57]">
                2023
              </span>
              <p className="text-sm leading-relaxed text-[#5e534d]">
                Launched reader-supported model; hit 1 million active
                subscribers.
              </p>
            </div>
            <div className="border-t border-[#eadfd4]" />
            <div className="flex gap-4 items-start">
              <span className="min-w-12 text-lg font-bold text-[#ff6b57]">
                2026
              </span>
              <p className="text-sm leading-relaxed text-[#5e534d]">
                4.2M+ monthly readers across 180 countries. Still independent.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-[#fbf6f1] px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#241d1a]">
              Our Core Values
            </h2>
            <p className="mx-auto max-w-xl text-[#6c5f58]">
              These principles guide every editorial decision we make — from
              which stories to pursue to how we present the facts.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="flex items-start gap-5 rounded-[26px] border border-[#eadfd4] bg-white/88 p-7 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.38)] transition hover:-translate-y-0.5"
              >
                <div className="mt-0.5 shrink-0 text-[#ff6b57]">
                  {value.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-semibold text-[#241d1a]">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6c5f58]">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-3xl font-bold text-[#241d1a]">
            Meet the Newsroom
          </h2>
          <p className="mx-auto max-w-xl text-[#6c5f58]">
            A team of experienced journalists, editors, and researchers united
            by a shared mission to inform the public.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-[26px] border border-[#eadfd4] bg-white/88 p-6 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.38)] transition hover:-translate-y-0.5"
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg mb-4 ${member.color}`}
              >
                {member.initial}
              </div>
              <h3 className="font-semibold text-[#241d1a]">{member.name}</h3>
              <p className="mb-3 text-sm text-[#ff6b57]">{member.role}</p>
              <p className="text-sm leading-relaxed text-[#6c5f58]">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#241d1a] px-4 py-16 text-center text-white">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Support Independent Journalism
          </h2>
          <p className="mb-8 leading-relaxed text-[#d7cbc4]">
            PulseWire is reader-funded. Your support keeps our newsroom
            independent, our reporting fearless, and our content free from
            corporate influence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/register"
              className="rounded-full bg-[#ff6b57] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#f25a45]"
            >
              Subscribe Now
            </a>
            <a
              href="/career"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
