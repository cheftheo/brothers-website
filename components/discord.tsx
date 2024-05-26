"use client";

import Image from "next/image";
import discord from "../public/assets/discord.png";
import { useRouter } from "next/navigation";

const Discord: React.FC = () => {
  const router = useRouter();
  return (
    <button className="bg-transparent flex justify-center items-center gap-x-2 w-fit my-4 pl-36">
      <Image src={discord} alt="discord" />
      <span
        className="uppercase text-primary-orange"
        onClick={() => {
          router.push("https://discord.gg/br");
        }}
      >
        DISCORD
      </span>
    </button>
  );
};

export default Discord;
