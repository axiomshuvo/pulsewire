import { Button, Card, CardContent, Input } from "@heroui/react";
import Link from "next/link";
import {
  RiArrowRightLine,
  RiArticleLine,
  RiBookmarkLine,
  RiLockLine,
  RiMailLine,
  RiShieldCheckLine,
} from "react-icons/ri";

export const metadata = {
  title: "Login | PulseWire",
  description:
    "Sign in to PulseWire to follow breaking news, revisit saved stories, and manage your personalized reading experience.",
};

const inputClassNames = {
  label: "pb-2 text-sm font-semibold text-zinc-700",
  inputWrapper:
    "h-14 rounded-xl border border-zinc-200 bg-zinc-50 px-3 shadow-none transition data-[hover=true]:border-zinc-300 data-[hover=true]:bg-white group-data-[focus=true]:border-[#ff6b57] group-data-[focus=true]:bg-white",
  input: "text-sm font-medium text-zinc-700 placeholder:text-zinc-400",
};

const loginHighlights = [
  "Follow major stories as they break.",
  "Save articles and pick up where you left off.",
  "Keep your reading profile secure and in sync.",
];

export default function LoginPage() {
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
      <div className="mx-auto w-full max-w-5xl">
        <Card
          radius="sm"
          shadow="sm"
          className="overflow-hidden border border-white/70 bg-white/90 shadow-[0_30px_80px_-45px_rgba(24,24,27,0.5)] backdrop-blur"
        >
          <CardContent className="grid gap-3 p-3 md:grid-cols-[0.92fr_1.08fr] md:p-4">
            <section className="relative overflow-hidden rounded-[26px] bg-zinc-900 px-6 py-8 text-white md:px-8 md:py-10">
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#ff6b57]/25 blur-3xl" />
              <div className="absolute bottom-6 right-6 h-16 w-16 rounded-full border border-white/10" />

              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-white/75">
                PulseWire Access
              </span>

              <h1 className="mt-6 text-3xl font-bold tracking-tight md:text-[2.6rem]">
                Welcome back.
              </h1>

              <p className="mt-4 max-w-sm text-sm leading-7 text-white/70 md:text-base">
                Sign in to keep up with breaking headlines, revisit saved reads,
                and manage your personal newsroom in one place.
              </p>

              <div className="mt-8 space-y-3">
                {loginHighlights.map((item, index) => {
                  const icons = [
                    RiArticleLine,
                    RiBookmarkLine,
                    RiShieldCheckLine,
                  ];
                  const Icon = icons[index];

                  return (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg text-[#ff9d8f]">
                        <Icon />
                      </span>
                      <p className="text-sm font-medium leading-6 text-white/85">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="flex flex-col justify-center px-3 py-5 md:px-8 md:py-8">
              <header>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6b57]">
                  Login
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-800 md:text-4xl">
                  Login your account
                </h2>
                <p className="mt-3 max-w-md text-sm leading-7 text-zinc-500 md:text-base">
                  Use your email address and password to continue your reading
                  session.
                </p>
              </header>

              <div className="my-8 h-px bg-zinc-200" />

              <form className="flex flex-col gap-5">
                <Input
                  type="email"
                  label="Email address"
                  labelPlacement="outside"
                  placeholder="Enter your email address"
                  radius="sm"
                  variant="flat"
                  startContent={
                    <span className="text-lg text-zinc-400">
                      <RiMailLine />
                    </span>
                  }
                  classNames={inputClassNames}
                />

                <Input
                  type="password"
                  label="Password"
                  labelPlacement="outside"
                  placeholder="Enter your password"
                  radius="sm"
                  variant="flat"
                  startContent={
                    <span className="text-lg text-zinc-400">
                      <RiLockLine />
                    </span>
                  }
                  classNames={inputClassNames}
                />

                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="font-medium text-zinc-500">
                    Secure sign-in for your saved stories and reading
                    preferences.
                  </span>
                  <Link
                    href="/register"
                    className="font-semibold text-zinc-800 transition hover:text-[#ff6b57]"
                  >
                    Need an account?
                  </Link>
                </div>

                <Button
                  type="submit"
                  radius="sm"
                  className="mt-2 h-14 bg-zinc-900 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
                >
                  Login
                  <RiArrowRightLine className="text-lg" />
                </Button>
              </form>

              <p className="mt-8 text-center text-sm font-semibold text-zinc-500 md:text-base">
                Don&apos;t Have An Account ?{" "}
                <Link
                  href="/register"
                  className="text-[#ff6b57] transition hover:text-[#ff5a43]"
                >
                  Register
                </Link>
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
