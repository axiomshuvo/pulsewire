import { Button, Card, CardContent } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";

export default function SocialLogin() {
  return (
    <Card className="rounded-[28px] border border-[#eadfd4] bg-white/82 shadow-[0_24px_70px_-55px_rgba(36,29,26,0.45)] backdrop-blur">
      <CardContent className="flex flex-col gap-4 p-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ff6b57]">
            Access
          </p>
          <h2 className="mt-3 text-2xl font-bold text-[#241d1a]">Login With</h2>
          <p className="mt-2 text-sm leading-7 text-[#6c5f58]">
            Continue with the provider you already use.
          </p>
        </div>

        <Button
          className="h-12 w-full justify-start rounded-2xl border border-[#eadfd4] bg-white text-sm font-semibold text-[#241d1a] shadow-none transition hover:bg-[#fff4ee]"
          variant="outline"
        >
          <FcGoogle className="text-lg" />
          Sign in with Google
        </Button>
        <Button
          className="h-12 w-full justify-start rounded-2xl border border-[#eadfd4] bg-white text-sm font-semibold text-[#241d1a] shadow-none transition hover:bg-[#fff4ee]"
          variant="outline"
        >
          <SiGithub className="text-lg" />
          Sign in with GitHub
        </Button>
      </CardContent>
    </Card>
  );
}
