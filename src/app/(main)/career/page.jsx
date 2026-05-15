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
  Investigations: "bg-blue-50 text-blue-700",
  Science: "bg-teal-50 text-teal-700",
  Technology: "bg-purple-50 text-purple-700",
  Multimedia: "bg-amber-50 text-amber-700",
  Editorial: "bg-rose-50 text-rose-700",
};

const typeColors = {
  "Full-time": "bg-emerald-50 text-emerald-700",
  Internship: "bg-orange-50 text-orange-700",
};

export default function CareerPage() {
  return (
    <div className="pb-16">
      {/* Hero */}
      <section className="bg-linear-to-b from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 border border-blue-400/40 rounded-full px-3 py-1 mb-5">
            Careers
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Do the Most Important Work of Your Career
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            At PulseWire, journalists have the freedom, resources, and global
            audience to pursue stories that genuinely matter. If you believe in
            fearless, independent journalism — you belong here.
          </p>
          <a
            href="#openings"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-sm transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Why PulseWire */}
      <section className="container mx-auto max-w-5xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Why PulseWire?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We've built a newsroom where journalists thrive. Here's what you can
            expect when you join our team.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-lg border border-gray-100 p-6 shadow-xs hover:shadow-sm transition-shadow"
            >
              <div className="text-blue-600 mb-4">{benefit.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Open Positions
            </h2>
            <p className="text-gray-500">
              {openings.length} roles available across our global newsroom
            </p>
          </div>
          <div className="space-y-4">
            {openings.map((job) => (
              <div
                key={job.title}
                className="bg-white rounded-lg border border-gray-100 p-6 shadow-xs hover:shadow-sm hover:border-blue-200 transition-all group"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${departmentColors[job.department] ?? "bg-gray-100 text-gray-600"}`}
                      >
                        {job.department}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeColors[job.type] ?? "bg-gray-100 text-gray-600"}`}
                      >
                        {job.type}
                      </span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-400 text-sm mb-3">
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
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {job.description}
                    </p>
                  </div>
                  <a
                    href={`mailto:careers@pulsewire.com?subject=Application: ${encodeURIComponent(job.title)}`}
                    className="shrink-0 self-start border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium text-sm px-5 py-2.5 rounded-sm transition-colors"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Hiring Process
          </h2>
          <p className="text-gray-500">
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
                <div className="hidden sm:block absolute top-5 left-[calc(50%+2rem)] right-0 h-px bg-gray-200" />
              )}
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold mb-4 z-10">
                {item.step}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-4">
        <div className="container mx-auto max-w-4xl bg-gray-900 rounded-lg text-white text-center py-14 px-8">
          <h2 className="text-2xl font-bold mb-3">Don't see the right role?</h2>
          <p className="text-gray-400 mb-7 max-w-lg mx-auto">
            We're always looking for exceptional journalists and storytellers.
            Send us your portfolio and tell us how you'd contribute to our
            newsroom.
          </p>
          <a
            href="mailto:careers@pulsewire.com"
            className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-3 rounded-sm transition-colors"
          >
            Send a Speculative Application
          </a>
        </div>
      </section>
    </div>
  );
}
