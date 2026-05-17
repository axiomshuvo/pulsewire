import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";

const newsItems = [
  {
    id: 1,
    title: "Global AI Summit Opens with Focus on Ethical Innovation",
    description:
      "World leaders and tech companies gathered today to discuss the future of artificial intelligence and responsible development.",
    category: "Technology",
    author: "John Smith",
    date: "2026-05-15",
  },
  {
    id: 2,
    title: "Stock Markets Rally After Positive Economic Reports",
    description:
      "Major global stock indexes climbed as new economic data showed stronger-than-expected growth in multiple sectors.",
    category: "Business",
    author: "Emily Johnson",
    date: "2026-05-15",
  },
  {
    id: 3,
    title: "National Team Advances to Championship Final",
    description:
      "Fans celebrated across the country after a thrilling semifinal victory secured a place in the final match.",
    category: "Sports",
    author: "Michael Brown",
    date: "2026-05-15",
  },
  {
    id: 4,
    title: "Scientists Discover New Renewable Energy Breakthrough",
    description:
      "Researchers unveiled a new battery technology that could significantly improve clean energy storage efficiency.",
    category: "Science",
    author: "Sophia Davis",
    date: "2026-05-15",
  },
  {
    id: 5,
    title: "International Film Festival Announces Award Winners",
    description:
      "Independent filmmakers received top honors at this year’s festival, highlighting emerging global talent.",
    category: "Entertainment",
    author: "David Wilson",
    date: "2026-05-15",
  },
];

export default function BreakingNews() {
  return (
    <div className="container mx-auto my-4 px-4">
      <div className="flex flex-col gap-4 rounded-[26px] border border-white/70 bg-white/78 px-5 py-4 shadow-[0_24px_60px_-45px_rgba(36,29,26,0.45)] backdrop-blur md:flex-row md:items-center">
        <Button className="h-11 rounded-full bg-[#241d1a] px-5 text-sm font-semibold text-white">
          Latest News
        </Button>
        <Marquee
          speed={85}
          gradient={true}
          gradientColor="#fbf7f3"
          gradientWidth={96}
          pauseOnHover={true}
          className="flex-1 cursor-pointer text-sm font-medium text-[#5f534d]"
        >
          {newsItems.map((news) => (
            <span key={news.id} className="mx-6 inline-flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6b57]" />
              {news.title}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
