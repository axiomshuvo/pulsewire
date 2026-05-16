import Link from "next/link";
import { RiLoginBoxFill } from "react-icons/ri";
import Navlink from "./Navlink";
export default function Navbar() {
  return (
    <div className="container mx-auto my-4 px-4">
      <div className="flex flex-col gap-4 rounded-[26px] border border-white/70 bg-white/78 px-4 py-4 shadow-[0_24px_60px_-45px_rgba(36,29,26,0.45)] backdrop-blur md:flex-row md:items-center md:justify-between">
        <div className="hidden min-w-[132px] items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#8b7a72] md:flex">
          <span className="h-2 w-2 rounded-full bg-[#ff6b57]" />
          Live Edition
        </div>

        <Navlink />

        <nav className="flex min-w-[132px] justify-center md:justify-end">
          <Link
            href="/login"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#241d1a] px-5 text-sm font-semibold text-white transition hover:bg-[#ff6b57]"
          >
            <RiLoginBoxFill className="text-base" />
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
}
