import Link from "next/link";

export default function LeftSideBars({ categories, activeCategoryId }) {
  return (
    <>
      <h2 className="text-xl text-left  ">All Categories</h2>
      <div className="flex flex-col  mt-4 gap-2">
        {categories.news_category.map((category) => (
          <Link
            className={`font-medium text-xl hover:bg-gray-200 p-2 rounded-md ${
              activeCategoryId === category.category_id
                ? "bg-blue-500 text-white"
                : ""
            }`}
            key={category.category_id}
            href={`/category/${category.category_id}`}
          >
            {category.category_name}
          </Link>
        ))}
      </div>
    </>
  );
}
