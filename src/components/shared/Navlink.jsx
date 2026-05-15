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
      <nav className="flex justify-center items-center gap-6 ">
        {navlinks.map((navlink) => (
          <Link
            href={navlink.href}
            key={navlink.name}
            className={pathname === navlink.href ? "text-blue-500  " : ""}
          >
            {navlink.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
