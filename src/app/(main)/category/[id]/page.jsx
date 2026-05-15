import LeftSideBars from "@/components/homepage/news/LeftSideBars";
import RightSideBars from "@/components/homepage/news/RightSideBars";
import { getCategories, getNewsByCategory } from "@/lib/dataFetch";

export default async function CategoryPageDetails({ params }) {
  const { id } = await params;
  const categories = await getCategories(id);

  console.log("Category ID:", id);
  const news = await getNewsByCategory(id);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 py-8">
      <div className=" col-span-3  ">
        <LeftSideBars categories={categories} activeCategoryId={id} />
      </div>
      <div className="col-span-6 ">
        <h2>All News</h2>
        {news.length > 0 ? (
          news.map((newsItem) => (
            <div key={newsItem._id} className="border p-4 mb-4 rounded-md">
              <h3 className="text-xl font-bold mb-2">{newsItem.title}</h3>
            </div>
          ))
        ) : (
          <p className=" text-3xl font-bold text-sky-500 ">
            No news available in this category.
          </p>
        )}
      </div>
      <div className=" col-span-3 ">
        <RightSideBars />
      </div>
    </div>
  );
}
