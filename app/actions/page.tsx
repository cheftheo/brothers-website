"use client";
import { useRouter } from "next/navigation";
import config from "../../config.json";

const Actions: React.FC = () => {
  const router = useRouter();
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <div className="w-1/2 flex flex-col my-28">
        <div className="mb-4">
          <h1 className="uppercase text-primary-orange text-sm font-bold">
            server
          </h1>
          <h1 className="uppercase font-bold text-3xl">actions</h1>
        </div>
        <div className="flex flex-col gap-y-10 ">
          {config.actions.map((action, i) => (
            <button
              className={`${
                i % 2 === 0 ? "bg-gradient-to-r" : "bg-gradient-to-l"
              } from-primary-orange to-black tracking-[2.1rem] text-white rounded-md py-10 text-3xl uppercase font-bold`}
              key={action.title + i}
              onClick={() => router.push(action.url)}
            >
              {action.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actions;
