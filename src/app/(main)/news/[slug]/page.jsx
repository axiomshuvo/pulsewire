import RightSideBars from "@/components/homepage/news/RightSideBars";
import { getNewsDetails } from "@/lib/dataFetch";
import { Button, Card, CardContent } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const newsDetails = await getNewsDetails(slug);
  console.log("Generating metadata for news:", newsDetails);

  return {
    title: newsDetails?.title || "News Details",
    description: newsDetails?.details || "Detailed view of the news article.",
  };
}

export default async function NewsDetailsPage({ params }) {
  const { slug } = await params;
  console.log("News Slug:", slug);

  const newsDetails = await getNewsDetails(slug);
  console.log("News Details:", newsDetails);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="space-y-5 lg:col-span-9">
          <div className="rounded-[28px] border border-[#eadfd4] bg-white/82 px-5 py-5 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.45)] backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff6b57]">
              Story File
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[#241d1a]">
              News Details
            </h2>
          </div>

          <Card className="rounded-[28px] border border-[#eadfd4] bg-white/90 shadow-[0_28px_70px_-52px_rgba(36,29,26,0.4)] backdrop-blur">
            <CardContent className="p-5 md:p-7">
              <Image
                src={newsDetails?.image_url}
                alt={newsDetails?.title || "News image"}
                className="w-full rounded-[24px] border border-[#efe4da]"
                width={1000}
                height={450}
              />

              <h1 className="mt-6 text-2xl font-bold leading-snug text-[#241d1a] md:text-3xl">
                {newsDetails?.title}
              </h1>

              <p className="mt-4 text-base leading-8 text-[#6c5f58]">
                {newsDetails?.details}
              </p>

              <Link
                href={`/category/${newsDetails?.category_id}`}
                className="mt-7 inline-block"
              >
                <Button
                  as="span"
                  className="h-12 rounded-full bg-[#241d1a] px-6 text-base font-semibold text-white transition hover:bg-[#ff6b57]"
                >
                  <FaArrowLeft />
                  All news in this category
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          <RightSideBars />
        </div>
      </div>
    </div>
  );
}
