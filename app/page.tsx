"use client";
import logo from "../public/assets/logo.png";
import { motion } from "framer-motion";
import Image from "next/image";
import background from "../public/assets/background.png";
import config from "../config.json";
import { Suspense, useEffect, useState } from "react";
import SideBar from "@/components/navbar";
import { AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Home: React.FC = () => {
  const [showServers, setShowServers] = useState(false);
  const [players, setPlayers] = useState<string | null>(null);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await fetch(
          `https://servers-frontend.fivem.net/api/servers/single/${config.serverCode}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
            method: "GET",
          },
        );

        const res = await data.json();

        setPlayers(res.Data.clients);
      } catch (err) {
        console.log(err);
        setPlayers(null);
      }
    };

    getPlayers();

    const interval = setInterval(async () => {
      await getPlayers();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showServers && (
          <motion.div
            className="fixed w-full h-screen inset-0 flex flex-col bg-black/80 z-[999] "
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
              },
            }}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="w-full h-full flex flex-col items-center justify-center gap-y-10 relative">
              {config.servers.map((server, i) => (
                <a
                  key={i}
                  className="w-1/2 h-40 flex justify-center items-center rounded-xl"
                  style={{
                    backgroundImage: `url(${server.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  href={server.invite}
                >
                  {server.name}
                </a>
              ))}
              <button
                onClick={() => setShowServers(false)}
                className="absolute top-0 right-0 m-8"
              >
                <FontAwesomeIcon icon={faClose} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="w-full flex justify-center items-center mt-40 flex-col relative">
        <div className="flex flex-col justify-center w-[460px] mb-40">
          <SideBar current="Home" className="-top-28" />
          <h1 className="uppercase text-sm font-bold text-primary-orange tracking-widest">
            welcome to
          </h1>
          <Image src={logo} alt="logo" />
          <div className="w-full h-px bg-white my-4" />
          <p className="text-center">
            {config.home["text-description"].replace("[X]", players ?? "0")}
          </p>
          <div className="flex">
            <button
              onClick={() => setShowServers(true)}
              className="bg-primary-orange py-2 rounded-md text-white uppercase mt-4 mr-4 w-1/2 text-center"
            >
              View Servers
            </button>
            <a
              className="bg-transparent border-2 border-primary-orange py-2 rounded-md text-primary-orange uppercase mt-4 w-1/2 text-center"
              target="_blank"
              href="/api/auth/signin/discord"
            >
              link discord
            </a>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-x-10 bg-primary-orange/20 h-32">
          {config.home.stats.map((stat, i) => (
            <Suspense fallback={<div>Loading...</div>} key={stat.title + i}>
              <StatsItem
                title={stat.title}
                icon=""
                value={
                  stat.value.includes("[X]")
                    ? stat.value.replace("[X]", players ?? "0")
                    : stat.value
                }
                // api={stat.api as any}
              />
            </Suspense>
          ))}
        </div>
        <div className="my-10 flex flex-col">
          <div className="relative text-white">
            <h1 className="text-4xl font-bold relative tracking-[2rem] uppercase">
              SERVER
            </h1>
            <h2 className="text-3xl absolute top-1/2 left-0 w-[95%] text-center z-10 uppercase tracking-[1.2rem] text-primary-orange font-bold">
              FEATURES
            </h2>
          </div>
        </div>

        <Features />
      </div>
    </>
  );
};

const GetStats = async (endpoint: string, key: string): Promise<string> => {
  console.log(endpoint);
  const res = await fetch(endpoint);
  const data = await res.json();

  return data[key].toString() || "0";
};

const StatsItem: React.FC<{
  value: string;
  title: string;
  icon: string;
  api?: {
    endpoint: string;
    key: string;
  };
}> = async ({ title, icon, value, api }) => {
  return (
    <div className="relative aspect-square w-56 flex flex-col items-center justify-center ">
      {api ? (
        value.replace("[X]", await GetStats(api.endpoint, api.key))
      ) : (
        <h1 className="text-xl">{value}</h1>
      )}
      <h3 className="text-sm">{title}</h3>
    </div>
  );
};

const Features: React.FC = () => {
  return (
    <div className="w-4/5 grid grid-cols-3 grid-rows-2 bg-[#0A0A0A] mb-10 p-10 gap-x-14 gap-y-20">
      {config.home.features.map((feature, i) => (
        <FeatureItem
          key={feature.title + i}
          title={feature.title}
          description={feature.description}
          // icon={feature.icon}
        />
      ))}
    </div>
  );
};

const FeatureItem: React.FC<{
  title: string;
  icon?: string;
  description: string;
}> = ({ title, icon, description }) => {
  return (
    <div className="text-white flex flex-col items-center justify-center relative bg-primary-orange/50 rounded-xl py-14 ">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-sm text-center px-12">{description}</p>
      <div className="absolute bottom-0 left-1/2 rounded-full bg-black flex justify-center items-center aspect-square w-20 -translate-x-1/2 translate-y-1/2">
        <div className="rounded-full bg-white flex justify-center items-center aspect-square w-3/4 text-black">
          <h1>A</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
