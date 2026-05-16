export const metadata = {
  title: "Careers at PulseWire",
  description:
    "Explore careers at PulseWire and join a global newsroom built around fearless journalism, editorial freedom, and meaningful reporting.",
};

const benefits = [
  {
    title: "Editorial Freedom",
    description:
      "Pitch and pursue the stories you believe matter. Our editors champion journalist-driven reporting.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125"
        />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    description:
      "Your work reaches over 4 million readers in 180+ countries. Your reporting has real-world impact.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "Competitive Compensation",
    description:
      "Market-rate salaries, equity participation, and performance bonuses tied to impact — not clicks.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75"
        />
      </svg>
    ),
  },
  {
    title: "Remote-First Culture",
    description:
      "Work from anywhere. We have bureaus in New York, London, and Nairobi — but your desk is wherever you are.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    title: "Health & Wellbeing",
    description:
      "Full medical, dental, and vision coverage. Mental health support, wellness stipend, and generous PTO.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
  {
    title: "Growth & Learning",
    description:
      "Annual learning budget, press-trip opportunities, mentorship from senior editors, and conference access.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
];

const openings = [
  {
    title: "Senior Investigative Reporter",
    department: "Investigations",
    location: "New York / Remote",
    type: "Full-time",
    description:
      "Lead deep-dive investigations into public institutions, corporate malfeasance, and policy failures. 5+ years of investigative experience required.",
  },
  {
    title: "Climate & Environment Correspondent",
    department: "Science",
    location: "London / Remote",
    type: "Full-time",
    description:
      "Cover the frontlines of the global climate crisis, from policy negotiations to on-the-ground reporting in affected regions.",
  },
  {
    title: "Technology & AI Reporter",
    department: "Technology",
    location: "Remote",
    type: "Full-time",
    description:
      "Report on the intersection of technology, AI, society, and democracy. Experience covering Big Tech regulation preferred.",
  },
  {
    title: "Video Producer",
    department: "Multimedia",
    location: "New York",
    type: "Full-time",
    description:
      "Produce compelling documentary-style video journalism for our digital platforms. Proficiency with Adobe Premiere required.",
  },
  {
    title: "Data Journalist",
    department: "Investigations",
    location: "Remote",
    type: "Full-time",
    description:
      "Use data analysis and visualization to uncover and tell complex stories. Proficiency in Python or R and tools like Flourish or D3.js required.",
  },
  {
    title: "Editorial Intern — Summer 2026",
    department: "Editorial",
    location: "New York / Remote",
    type: "Internship",
    description:
      "A 12-week paid program for emerging journalists. Work alongside senior editors and contribute to live coverage across all desks.",
  },
];

const departmentColors = {
  Investigations: "bg-[#f6e7df] text-[#aa5641]",
  Science: "bg-[#e5f0ea] text-[#4d6c5e]",
  Technology: "bg-[#ebe6ef] text-[#6b5879]",
  Multimedia: "bg-[#f4ead9] text-[#916437]",
  Editorial: "bg-[#f3e0df] text-[#93585a]",
};

const typeColors = {
  "Full-time": "bg-[#e5efe7] text-[#526a58]",
  Internship: "bg-[#f5e7d8] text-[#936239]",
};

export default function CareerPage() {
  return (
    <div className="pb-16 text-[#241d1a]">
      {/* Hero */}
      <section className="bg-[linear-gradient(180deg,#241d1a_0%,#342822_100%)] px-4 py-20 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="mb-5 inline-block rounded-full border border-[#ff6b57]/25 bg-[#ff6b57]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff9f92]">
            Careers
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Do the Most Important Work of Your Career
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-[#d7cbc4]">
            At PulseWire, journalists have the freedom, resources, and global
            audience to pursue stories that genuinely matter. If you believe in
            fearless, independent journalism — you belong here.
          </p>
          <a
            href="#openings"
            className="inline-block rounded-full bg-[#ff6b57] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#f25a45]"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Why PulseWire */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-3xl font-bold text-[#241d1a]">
            Why PulseWire?
          </h2>
          <p className="mx-auto max-w-xl text-[#6c5f58]">
            We&apos;ve built a newsroom where journalists thrive. Here&apos;s
            what you can expect when you join our team.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[26px] border border-[#eadfd4] bg-white/88 p-6 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.38)] transition hover:-translate-y-0.5"
            >
              <div className="mb-4 text-[#ff6b57]">{benefit.icon}</div>
              <h3 className="mb-2 font-semibold text-[#241d1a]">
                {benefit.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#6c5f58]">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="bg-[#fbf6f1] px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="mb-3 text-3xl font-bold text-[#241d1a]">
              Open Positions
            </h2>
            <p className="text-[#6c5f58]">
              {openings.length} roles available across our global newsroom
            </p>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group rounded-[26px] border border-[#eadfd4] bg-white/88 p-6 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.38)] transition hover:-translate-y-0.5 hover:border-[#ff6b57]/30"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${departmentColors[job.department] ?? "bg-[#f1ebe4] text-[#6c5f58]"}`}
                      >
                        {job.department}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${typeColors[job.type] ?? "bg-[#f1ebe4] text-[#6c5f58]"}`}
                      >
                        {job.type}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-[#241d1a] transition-colors group-hover:text-[#ff6b57]">
                      {job.title}
                    </h3>
                    <div className="mb-3 flex items-center gap-1 text-sm text-[#8b7a72]">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      {job.location}
                    </div>
                    <p className="text-sm leading-relaxed text-[#6c5f58]">
                      {job.description}
                    </p>
                  </div>
                  <a
                    href={`mailto:careers@pulsewire.com?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="shrink-0 self-start rounded-full border border-[#ff6b57]/40 px-5 py-2.5 text-sm font-medium text-[#ff6b57] transition-colors hover:bg-[#ff6b57] hover:text-white"
                  >
                    Apply
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="container mx-auto max-w-4xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="mb-3 text-3xl font-bold text-[#241d1a]">
            Our Hiring Process
          </h2>
          <p className="text-[#6c5f58]">
            Straightforward, transparent, and respectful of your time.
          </p>
        </div>
        <div className="grid sm:grid-cols-4 gap-4 relative">
          {[
            {
              step: "01",
              title: "Apply",
              desc: "Submit your CV, cover letter, and relevant clips or portfolio.",
            },
            {
              step: "02",
              title: "Screen",
              desc: "A 30-min call with a recruiter to discuss your background and the role.",
            },
            {
              step: "03",
              title: "Interview",
              desc: "A skills-based interview with the hiring editor and a team member.",
            },
            {
              step: "04",
              title: "Offer",
              desc: "We move quickly. Expect a decision within two weeks of your final interview.",
            },
          ].map((item, i) => (
            <div
              key={item.step}
              className="relative flex flex-col items-center text-center px-4"
            >
              {i < 3 && (
                <div className="absolute left-[calc(50%+2rem)] right-0 top-5 hidden h-px bg-[#eadfd4] sm:block" />
              )}
              <div className="z-10 mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#241d1a] text-sm font-bold text-white">
                {item.step}
              </div>
              <h3 className="mb-2 font-semibold text-[#241d1a]">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#6c5f58]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4">
        <div className="container mx-auto max-w-4xl rounded-[28px] bg-[#241d1a] px-8 py-14 text-center text-white shadow-[0_28px_80px_-50px_rgba(36,29,26,0.7)]">
          <h2 className="text-2xl font-bold mb-3">
            Don&apos;t see the right role?
          </h2>
          <p className="mx-auto mb-7 max-w-lg text-[#d7cbc4]">
            We&apos;re always looking for exceptional journalists and
            storytellers. Send us your portfolio and tell us how you&apos;d
            contribute to our newsroom.
          </p>
          <a
            href="mailto:careers@pulsewire.com"
            className="inline-block rounded-full bg-[#ff6b57] px-8 py-3 font-semibold text-white transition-colors hover:bg-[#f25a45]"
          >
            Send a Speculative Application
          </a>
        </div>
      </section>
    </div>
  );
}
