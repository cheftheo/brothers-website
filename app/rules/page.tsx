"use client";
import { motion } from "framer-motion";
import config from "../../config.json";
import SideBar from "@/components/navbar";
import background from "../../public/assets/background.png";
import { useState } from "react";

const Rules: React.FC = () => {
  const [active, setActive] = useState<"server" | "discord">("server");
  return (
    <div className="w-full flex items-center justify-center flex-col relative">
      <SideBar current="News" className="" />
      <div className="w-1/2 flex flex-col my-28">
        <div className="mb-4">
          <h1 className="uppercase text-primary-orange text-sm font-bold">
            server
          </h1>
          <h1 className="uppercase font-bold text-3xl">rules</h1>
        </div>
        <div className="grid grid-cols-2 items-center rounded-md p-10 gap-2">
          <button
            className="uppercase py-4 px-8"
            onClick={() => setActive("server")}
            style={{
              backgroundImage: `url(${background.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            Server <span className="font-bold">commands</span>
          </button>
          <button
            className="uppercase py-4 px-8"
            onClick={() => setActive("discord")}
            style={{
              backgroundImage: `url(${background.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            discord <span className="font-bold">rules</span>
          </button>
          <div className="p-4 bg-white/10 col-span-2 rounded-md transition duration-500">
            {config.rules[active]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
