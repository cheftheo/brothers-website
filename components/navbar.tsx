"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faServer,
  faCrown,
  faHammer,
  faNewspaper,
  faUsersGear,
  faList,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

const links = [
  "Home",
  "Leaderboard",
  "News",
  "Staff",
  "Rules",
  "Actions",
  "Tournaments",
] as const;

const SideBar: React.FC<{
  current: (typeof links)[number];
  className?: string;
}> = ({ current, className }) => {
  const [hover, setHover] = useState<number | null>(null);
  const router = useRouter();

  return (
    <div
      className={`flex flex-col w-40 absolute left-0 gap-y-2 ml-5 ${
        className ? className : ""
      }`}
    >
      {links.map((link, i) => (
        <div
          key={i}
          className="flex items-center px-4 rounded-md bg-white/10 p-2 w-fit"
          style={{
            borderBottom: link === current ? "2px solid orange" : "none",
          }}
          onClick={() => router.push(link == "Home" ? "/" : link.toLowerCase())}
          onMouseOver={() => setHover(i)}
          onMouseLeave={() => setHover(null)}
        >
          <div className="w-10 aspect-square flex justify-center items-center transitiion-all duration-500 ease-in-out">
            <FontAwesomeIcon
              icon={
                link === "Home"
                  ? faHouse
                  : link === "Leaderboard"
                    ? faCrown
                    : link === "Staff"
                      ? faUsersGear
                      : link === "Rules"
                        ? faScroll
                        : link === "Tournaments"
                          ? faServer
                          : faServer
              }
              className="text-xl"
              color={current == link || hover === i ? "#BD9700" : "white"}
            />
          </div>
          {(current == link || hover === i) && (
            <span className="ml-10 pr-5 tracking-[0.5rem]">{link}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default SideBar;
