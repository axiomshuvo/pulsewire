import Link from "next/link";

export default function LeftSideBars({ categories, activeCategoryId }) {
  return (
    <section className="rounded-[28px] border border-[#eadfd4] bg-white/82 p-5 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.45)] backdrop-blur lg:sticky lg:top-6">
      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff6b57]">
        Browse
      </p>
      <h2 className="mt-3 text-2xl font-bold text-[#241d1a]">All Categories</h2>
      <p className="mt-2 text-sm leading-7 text-[#6c5f58]">
        Jump between the desks shaping today&apos;s front page.
      </p>

      <div className="mt-5 flex flex-col gap-2">
        {categories.news_category.map((category) => (
          <Link
            className={`rounded-2xl px-4 py-3 text-base font-semibold transition ${
              activeCategoryId === category.category_id
                ? "bg-[#241d1a] text-white shadow-[0_18px_40px_-28px_rgba(36,29,26,0.85)]"
                : "bg-[#fcf7f2] text-[#5e534d] hover:bg-[#fff1ec] hover:text-[#241d1a]"
            }`}
            key={category.category_id}
            href={`/category/${category.category_id}`}
          >
            {category.category_name}
          </Link>
        ))}
      </div>
    </section>
  );
}
