import { Person } from "@gravity-ui/icons";
import Link from "next/link";
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
            className="flex justify-center items-center gap-2"
          >
            <Person />
            Add Member
          </Link>
        </nav>
      </div>
    </div>
  );
}
