"use client";

import { authClient } from "@/lib/auth-client";

import Image from "next/image";
import Link from "next/link";
import { RiLoginBoxFill } from "react-icons/ri";
import Navlink from "./Navlink";

const getSafeAvatarSrc = (imageSrc) => {
  if (!imageSrc || typeof imageSrc !== "string") {
    return null;
  }

  if (imageSrc.startsWith("/")) {
    return imageSrc;
  }

  try {
    const imageUrl = new URL(imageSrc);

    return imageUrl.protocol === "https:" ? imageSrc : null;
  } catch {
    return null;
  }
};

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  const avatarSrc = getSafeAvatarSrc(user?.image);

  console.log("Session data in Navbar:", user);

  return (
    <div className="container mx-auto my-4 px-4">
      <div className="flex flex-col gap-4 rounded-[26px] border border-white/70 bg-white/78 px-4 py-4 shadow-[0_24px_60px_-45px_rgba(36,29,26,0.45)] backdrop-blur md:flex-row md:items-center md:justify-between">
        <div className="hidden min-w-33 items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-[#8b7a72] md:flex">
          <span className="h-2 w-2 rounded-full bg-[#ff6b57]" />
          Live Edition
        </div>

        <Navlink />

        <nav className="flex min-w-33 items-center justify-center gap-3 md:justify-end">
          {isPending ? (
            <div className="h-11 w-11 animate-spin rounded-full border-2 border-[#ff6b57] border-t-transparent" />
          ) : user ? (
            <>
              <Link
                href="/dashboard"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-[#241d1a] px-4 text-sm font-semibold text-white transition hover:bg-[#ff6b57]"
              >
                {avatarSrc ? (
                  <Image
                    src={avatarSrc}
                    alt={`${user.name}'s avatar`}
                    className="h-7 w-7 rounded-full object-cover ring-2 ring-white/20"
                    width={28}
                    height={28}
                  />
                ) : (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    <RiLoginBoxFill className="text-sm" />
                  </span>
                )}
                <span className="max-w-30 truncate">{user.name}</span>
              </Link>

              <button
                onClick={async () => {
                  await authClient.signOut();
                  window.location.replace("/");
                }}
                className="inline-flex h-11 items-center justify-center rounded-full border border-[#eadfd4] bg-white px-4 text-sm font-semibold text-[#6c5f58] transition hover:border-[#ff6b57]/30 hover:text-[#ff6b57]"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#241d1a] px-5 text-sm font-semibold text-white transition hover:bg-[#ff6b57]"
            >
              <RiLoginBoxFill className="text-base" />
              <span>Login</span>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
}
