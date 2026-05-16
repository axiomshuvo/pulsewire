import Image from "next/image";
import Link from "next/link";
import {
  FaEye,
  FaRegBookmark,
  FaShareAlt,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";

function formatDate(dateString) {
  if (!dateString) return "";

  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderStars(rating = 0) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} />);
    }
  }

  return stars;
}

export default function NewsCard({ news }) {
  console.log("NewsCard Props:", news);

  return (
    <article className="mb-8 overflow-hidden rounded-[28px] border border-[#eadfd4] bg-white/90 shadow-[0_28px_70px_-52px_rgba(36,29,26,0.4)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_34px_80px_-50px_rgba(36,29,26,0.45)]">
      <div className="flex items-center justify-between border-b border-[#efe4da] bg-[#fcf7f2] px-6 py-5">
        <div className="flex items-center gap-4">
          <Image
            src={news?.author?.img}
            alt={news?.author?.name || "Author"}
            className="h-12 w-12 rounded-full border border-[#eadfd4] object-cover"
            width={48}
            height={48}
          />

          <div>
            <h3 className="text-lg font-semibold text-[#241d1a] md:text-xl">
              {news?.author?.name}
            </h3>

            <p className="text-sm text-[#7a6c65]">
              {formatDate(news?.author?.published_date)}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-lg text-[#8b7a72]">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfd4] bg-white transition hover:border-[#ff6b57]/30 hover:text-[#ff6b57]">
            <FaRegBookmark />
          </span>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#eadfd4] bg-white transition hover:border-[#ff6b57]/30 hover:text-[#ff6b57]">
            <FaShareAlt />
          </span>
        </div>
      </div>

      <div className="px-6 py-6">
        <h2 className="mb-6 text-2xl font-bold leading-snug text-[#241d1a] md:text-3xl">
          {news?.title}
        </h2>

        <Image
          src={news?.thumbnail_url}
          alt={news?.title || "News image"}
          className="h-52 w-full rounded-[24px] border border-[#efe4da] bg-[#f7f0e8] object-cover md:h-72"
          width={500}
          height={260}
        />

        <p className="mt-7 line-clamp-3 text-base leading-8 text-[#6c5f58] md:text-lg">
          {news?.details}
        </p>

        <Link
          href={`/news/${news?._id}`}
          className="mt-6 inline-flex items-center justify-end gap-2 text-lg font-semibold text-[#ff6b57] transition hover:text-[#e55a46]"
        >
          Read More
        </Link>
      </div>

      <div className="mx-6 flex items-center justify-between border-t border-[#efe4da] py-5">
        <div className="flex items-center gap-3">
          <div className="flex gap-1 text-xl text-[#ffb24f] md:text-2xl">
            {renderStars(news?.rating?.number)}
          </div>

          <span className="text-lg font-semibold text-[#6c5f58]">
            {news?.rating?.number}
          </span>
        </div>

        <div className="flex items-center gap-3 text-[#6c5f58]">
          <FaEye className="text-2xl" />
          <span className="text-lg font-semibold">{news?.total_view}</span>
        </div>
      </div>
    </article>
  );
}
