"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex w-full flex-col gap-3 sm:flex-row md:w-auto md:min-w-[24rem]"
    >
      <input
        type="email"
        placeholder="Your email address"
        className="h-11 flex-1 rounded-full border border-white/12 bg-white/8 px-5 text-sm text-white placeholder:text-white/45 focus:border-[#ff6b57] focus:bg-white/12 focus:outline-none"
      />
      <button
        type="submit"
        className="h-11 shrink-0 rounded-full bg-[#ff6b57] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#f25a45]"
      >
        Subscribe
      </button>
    </form>
  );
}
