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
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        src={logoImg}
        alt="PulseWire"
        width={250}
        height={200}
        style={{ width: "250px", height: "auto" }}
      />
      <p>Journalism Without Fear or Favour</p>
      <h5>{format(new Date(), "EEEE, MMMM d, yyyy")}</h5>
    </div>
  );
}
