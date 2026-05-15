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
    <div className="container mx-auto my-4">
      <div className="flex justify-between bg-gray-200 p-4 rounded-2xl items-center">
        <Button variant="danger">Latest News</Button>
        <Marquee
          direction="right"
          speed={100}
          gradient={true}
          gradientColor="#e5e7eb "
          gradientWidth={50}
          pauseOnHover={true}
          className="cursor-pointer"
        >
          {newsItems.map((news) => (
            <span key={news.id} className="  mx-6">
              {news.title}
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
