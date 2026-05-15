import { Button } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
export default function SocialLogin() {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold ">Login With</h2>
      <Button className="w-full" variant="outline">
        <FcGoogle />
        Sign in with Google
      </Button>
      <Button className="w-full" variant="outline">
        <SiGithub />
        Sign in with GitHub
      </Button>
    </div>
  );
}
