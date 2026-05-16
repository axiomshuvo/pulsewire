import LeftSideBars from "@/components/homepage/news/LeftSideBars";
import NewsCard from "@/components/homepage/news/NewsCard";
import RightSideBars from "@/components/homepage/news/RightSideBars";
import { getCategories, getNewsByCategory } from "@/lib/dataFetch";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const categories = await getCategories(id);

  console.log("Category ID:", id);
  const news = await getNewsByCategory(id);

  return {
    title: categories?.name || "Category News",
    description: news?.details || "Detailed view of the news article.",
  };
}

export default async function CategoryPageDetails({ params }) {
  const { id } = await params;
  const categories = await getCategories(id);

  console.log("Category ID:", id);
  const news = await getNewsByCategory(id);

  return (
    <div className="container mx-auto grid gap-6 px-4 py-8 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <LeftSideBars categories={categories} activeCategoryId={id} />
      </div>

      <div className="space-y-5 lg:col-span-6">
        <div className="rounded-[28px] border border-[#eadfd4] bg-white/82 px-5 py-5 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.45)] backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff6b57]">
            Category Feed
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#241d1a]">All News</h2>
          <p className="mt-2 text-sm leading-7 text-[#6c5f58]">
            A sharper look at the latest reporting in this desk.
          </p>
        </div>

        {news.length > 0 ? (
          news.map((newsItem) => (
            <NewsCard key={newsItem._id} news={newsItem} />
          ))
        ) : (
          <div className="rounded-[28px] border border-dashed border-[#e7d8cc] bg-[#fff8f2] px-6 py-12 text-center">
            <p className="text-2xl font-bold text-[#241d1a] md:text-3xl">
              No news available in this category.
            </p>
            <p className="mt-3 text-sm leading-7 text-[#6c5f58]">
              Try another desk to keep reading the latest PulseWire reporting.
            </p>
          </div>
        )}
      </div>

      <div className="lg:col-span-3">
        <RightSideBars />
      </div>
    </div>
  );
}
