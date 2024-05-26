"use client";

import SideBar from "@/components/navbar";
import config from "../../config.json";
import Image from "next/image";

const Staff: React.FC = () => {
  return (
    <div className="w-full flex items-end justify-center flex-col px-20 relative">
      <SideBar current="Staff" className="top-20" />
      <div className="flex items-center justify-center flex-col ">
        <div className="my-10 flex flex-col">
          <div className="relative text-white">
            <h1 className="text-4xl font-bold relative tracking-[2rem] uppercase">
              staff
            </h1>
            <h2 className="text-3xl absolute top-1/2 left-1/2 text-center z-10 uppercase tracking-[1.2rem] text-primary-orange font-bold -translate-x-1/2">
              members
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-4 p-10 gap-10 mb-10 bg-white/10 rounded-md ">
          {config.staff.map((member, i) => (
            <StaffMember key={member.name + i} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

const StaffMember: React.FC<{ name: string; role: string; avatar: string }> = ({
  name,
  role,
  avatar,
}) => {
  return (
    <div className="flex flex-col items-center rounded-md bg-black p-5">
      <Image
        src={avatar}
        className="rounded-md"
        alt="avatar"
        width={100}
        height={100}
      />
      <h1 className="text-white font-bold text-2xl mt-4">{name}</h1>
      <h2 className="text-primary-orange uppercase font-bold text-lg">
        {role}
      </h2>
    </div>
  );
};

export default Staff;
