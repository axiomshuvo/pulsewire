import { Card, CardContent } from "@heroui/react";
import Link from "next/link";
import {
  RiNotification3Line,
  RiShieldCheckLine,
  RiUser3Line,
} from "react-icons/ri";
import RegisterForm from "./RegisterForm";

export const metadata = {
  title: "Register | PulseWire",
  description:
    "Create your PulseWire account to personalize the stories you follow and keep your reading profile available across sessions.",
};

const registerHighlights = [
  {
    icon: RiUser3Line,
    title: "Reader profile",
    description: "Create a personal newsroom profile in minutes.",
  },
  {
    icon: RiNotification3Line,
    title: "Faster access",
    description: "Receive quicker access to the sections you care about.",
  },
  {
    icon: RiShieldCheckLine,
    title: "Protected account",
    description: "Keep your account details and reading preferences secure.",
  },
];

export default function RegisterPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#f5f3ef] px-4 py-10 md:px-6 md:py-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255, 107, 87, 0.18), transparent 42%)",
        }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(39, 39, 42, 0.1), transparent 68%)",
        }}
      />
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center">
        <section className="max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#ff6b57]/20 bg-[#ff6b57]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.32em] text-[#c44d3d]">
            Join PulseWire
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-[#241d1a] md:text-[3.5rem]">
            Build your reader profile.
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#6c5f58] md:text-[17px]">
            Create your account once, keep your newsroom preferences in sync,
            and make the registration flow easier to finish on the first pass.
          </p>
        </section>

        <Card className="mt-10 w-full max-w-5xl rounded-[32px] border border-white/70 bg-white/88 shadow-[0_35px_90px_-48px_rgba(24,24,27,0.45)] backdrop-blur-xl">
          <CardContent className="p-5 md:p-8 lg:p-10">
            <section className="mx-auto w-full max-w-3xl">
              <header className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6b57]">
                  Register
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#241d1a] md:text-4xl">
                  Create your account
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#6c5f58] md:text-base">
                  Your form is centered here so every field stays visible,
                  readable, and easier to complete.
                </p>
              </header>

              <div className="mt-8 rounded-[28px] border border-[#efe4da] bg-gradient-to-b from-[#fffdfb] to-[#fbf6f1] p-5 shadow-[0_30px_70px_-50px_rgba(36,29,26,0.55)] md:p-7">
                <RegisterForm />
              </div>

              <p className="mt-8 text-center text-sm font-semibold text-[#6c5f58] md:text-base">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-[#ff6b57] transition hover:text-[#ff5a43]"
                >
                  Login
                </Link>
              </p>
            </section>
          </CardContent>
        </Card>

        <section className="mt-8 grid w-full max-w-5xl gap-4 md:grid-cols-3">
          {registerHighlights.map(({ description, icon: Icon, title }) => (
            <div
              key={title}
              className="rounded-[26px] border border-[#eadfd4] bg-white/80 p-5 shadow-[0_18px_45px_-38px_rgba(36,29,26,0.5)] backdrop-blur"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#241d1a] text-lg text-[#ffb4a8]">
                <Icon />
              </span>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#8b7a72]">
                {title}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#3f3531]">
                {description}
              </p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
