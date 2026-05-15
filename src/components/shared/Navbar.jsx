import Link from "next/link";
import { RiLoginBoxFill } from "react-icons/ri";
import Navlink from "./Navlink";
export default function Navbar() {
  return (
    <div className="container  mx-auto my-4">
      <div className="flex justify-between items-center">
        <nav></nav>
        <Navlink />
        <nav className="flex justify-center items-center gap-2">
          <Link
            href="/login"
            className=" px-4 py-2 text-white bg-sky-500 rounded-2xl flex justify-center items-center gap-2"
          >
            <RiLoginBoxFill />
            Login
          </Link>
        </nav>
      </div>
    </div>
  );
}
