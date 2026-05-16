import logoImg from "@/assets/logo.png";
import { format } from "date-fns";
import Image from "next/image";
// const formattedDate = new Date().toLocaleDateString("en-US", {
//   weekday: "long",
//   year: "numeric",
//   month: "long",
//   day: "numeric",
// });

export default function Header() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-3 rounded-[28px] border border-white/70 bg-white/72 px-6 py-8 text-center shadow-[0_24px_70px_-48px_rgba(36,29,26,0.45)] backdrop-blur">
        <span className="inline-flex items-center rounded-full border border-[#ff6b57]/20 bg-[#fff1ec] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#ff6b57]">
          PulseWire Edition
        </span>

        <Image
          src={logoImg}
          alt="PulseWire"
          width={250}
          height={200}
          priority
          className="h-auto w-56 md:w-64"
        />

        <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#7d6e66] md:text-sm">
          Journalism Without Fear or Favour
        </p>

        <h5 className="rounded-full border border-[#eee1d7] bg-[#fbf7f3] px-5 py-2 text-sm font-semibold text-[#5f534d]">
          {format(new Date(), "EEEE, MMMM d, yyyy")}
        </h5>
      </div>
    </div>
  );
}
