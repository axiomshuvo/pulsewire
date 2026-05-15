"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex gap-0 w-full md:w-auto md:min-w-95"
    >
      <input
        type="email"
        placeholder="Your email address"
        className="flex-1 bg-gray-800 border border-gray-700 text-white text-sm px-4 py-2.5 rounded-l-sm focus:outline-none focus:border-blue-500 placeholder-gray-500"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-r-sm transition-colors shrink-0"
      >
        Subscribe
      </button>
    </form>
  );
}
