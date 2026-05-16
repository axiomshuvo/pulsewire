"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink() {
  const navlinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Career", href: "/career" },
  ];
  // active navlink
  const pathname = usePathname();

  return (
    <div>
      <nav className="flex flex-wrap items-center justify-center gap-1 rounded-full bg-[#f7efe8] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.5)]">
        {navlinks.map((navlink) => {
          const isActive =
            navlink.href === "/"
              ? pathname === "/" ||
                pathname.startsWith("/category/") ||
                pathname.startsWith("/news/")
              : pathname === navlink.href;

          return (
            <Link
              href={navlink.href}
              key={navlink.name}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition md:px-5 ${
                isActive
                  ? "bg-white text-[#ff6b57] shadow-sm"
                  : "text-[#6f625a] hover:text-[#241d1a]"
              }`}
            >
              {navlink.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
