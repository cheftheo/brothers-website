"use client";
import Image from "next/image";
import logoStand from "../public/assets/logo-standalone.png";
import logo from "../public/assets/logo.png";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrown, faHammer } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence } from "framer-motion";

import config from "../config.json";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-center items-center w-full border-b-8 border-primary-orange border-opacity-10 relative">
        {(pathname === "/" && <Crown /> || pathname === "/home" && <Crown />)}
        <Image src={
          pathname === "/" || pathname === "/home" ? logoStand : logo 
          } 
          
          alt="logo" />
      </div>
    </>
  );
};

const Crown: React.FC = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="right-5 fixed z-50">
      <button
        className="rounded-full aspect-square w-10 items-center justify-center bg-primary-orange "
        onClick={() => setActive(!active)}
      >
        <FontAwesomeIcon icon={faCrown} />
      </button>
      <AnimatePresence>
        {active && (
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
              exit: {
                opacity: 0,
                y: -20,
              },
            }}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-20 right-0 text-white flex"
          >
            <div className="flex flex-col items-center justify-center gap-y-2 rounded-xl px-5">
              <div className="flex flex-col bg-primary-orange items-center justify-center py-5 rounded-xl gap-y-5 w-48 px-5 relative">
                <Divider />
                <div>
                  {config.founders.map((user, i) => (
                    <div className="flex items-center gap-x-2" key={i}>
                      <FontAwesomeIcon icon={faHammer} className="text-black" />
                      <h1 className="text-black">{user.username}</h1>
                    </div>
                  ))}
                </div>
                <Divider />
                <a
                  className="absolute -bottom-12 w-full bg-primary-orange text-center py-2 rounded-xl text-black font-bold flex items-center justify-center gap-x-2"
                  href="/staff"
                >
                  <FontAwesomeIcon icon={faHammer} />
                  <h1>Staff Members</h1>
                </a>
              </div>
            </div>
            <div className="bg-primary-orange p-4 rounded-full">
              <div className="flex flex-col items-center justify-center leading-[20px] text-black">
                {["F", "O", "U", "N", "D", "E", "R", "S"].map((letter, i) => (
                  <h1 className="uppercase " key={i}>
                    {letter}
                  </h1>
                ))}
                <FontAwesomeIcon icon={faCrown} className="mt-2 text-black" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Divider = () => {
  return <div className="h-1 w-full bg-black" />;
};

export default Header;
// export { Crown };
