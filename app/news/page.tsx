import SideBar from "@/components/navbar";
import config from "../../config.json";

const News: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col relative">
      <SideBar current="News" className="top-20" />
      <div className="w-1/2 flex flex-col my-28">
        <div className="mb-4">
          <h1 className="uppercase text-primary-orange text-sm font-bold">
            server
          </h1>
          <h1 className="uppercase font-bold text-3xl">news</h1>
        </div>
        <div className="bg-gradient-to-r from-primary-orange to-black flex flex-col items-center justify-center rounded-xl p-10">
          <h1 className="text-4xl font-bold text-white tracking-[3rem] uppercase">
            news
          </h1>
          <div className="w-full h-px bg-white my-4" />
          <div className="rounded-md text-white">
            <p className="rounded-md p-5 bg-black/30">
              {config.news.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
