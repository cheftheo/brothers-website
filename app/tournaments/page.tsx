import SideBar from "@/components/navbar";
import image from "../../public/assets/Image.png";
import logo from "../../public/assets/logo-standalone.png";
import Image from "next/image";
const Tournaments: React.FC = () => {
  return (
    <>
      <div className="w-full relative flex items-center justify-end px-20 py-40">
        <SideBar current="Tournaments" className="top-20" />
        <div className="flex flex-col items-center justify-center w-1/2 bg-white/10 rounded-md py-5">
          <div className="flex items-center self-start">
            <div className="w-1/3">
              <Image src={logo} alt="logo" />
            </div>
            <h1>Tournaments</h1>
          </div>
          <p className="max-h-50 overflow-y-auto px-12">
            Lorem ipsum dolor sit amet, officia excepteur ex fugiat
            reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
            ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
            Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
            voluptate dolor minim nulla est proident. Nostrud officia pariatur
            ut officia. Sit irure elit esse ea nulla sunt ex occaecat
            reprehenderit commodo officia dolor Lorem duis laboris cupidatat
            officia voluptate. Culpa proident adipisicing id nulla nisi laboris
            ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo
            ex non excepteur duis sunt velit enim. Voluptate laboris sint
            cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
          </p>
        </div>
      </div>
      <div className="w-full h-screen grid grid-cols-12 bg-[#0C0C0C] px-20 relative py-50">
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0">
          <div className="aspect-square rounded-full flex justify-center items-center w-60 border-primary-orange border-2 bg-black relative">
            <Image src={logo} alt="logo" />
            <h1 className="uppercase absolute font-bold text-2xl shadow">
              tournament
            </h1>
          </div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0">
          <div
            className="rounded-xl flex justify-center items-center font-bold tracking-widest px-20 py-12 text-black text-5xl"
            style={{
              backgroundImage: `url(${image.src}), linear-gradient(to right, #BD9700, black)`,
              WebkitTextStrokeWidth: "3px",
              WebkitTextStrokeColor: "#BD9700",
            }}
          >
            <h1>$1000</h1>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full space-y-8">
            {[...Array(8)].map((_, i) => (
              <Box key={i} />
            ))}
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full space-y-8">
            {[...Array(4)].map((_, i) => (
              <div
                className="h-[10rem] rounded-xl flex justify-start items-center w-full"
                key={i}
              >
                <div className="w-1/2 h-[6rem] border-y-2 border-r-2 border-white"></div>
                <div className="w-1/2 h-0.5 bg-white"></div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full space-y-32">
            {[...Array(4)].map((_, i) => (
              <Box key={i} />
            ))}
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full space-y-[8rem]">
            {[...Array(2)].map((_, i) => (
              <div
                className="h-[16rem] rounded-xl flex justify-start items-center w-full"
                key={i}
              >
                <div className="w-1/2 h-[12rem] border-y-2 border-r-2 border-white"></div>
                <div className="w-1/2 h-0.5 bg-white"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full h-full col-span-4 flex items-center justify-center">
          <div className="w-full">
            <div className="flex space-x-6">
              <Box />
              <Box />
            </div>
            <div className="h-[2rem] flex flex-col items-center">
              <div className="h-1/2 w-[21.5rem] border-x-2 border-b-2 border-white"></div>
              <div className="h-1/2 w-0.5 bg-white"></div>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-1/2">
                <Box />
              </div>
            </div>

            <div className="h-[2rem] flex flex-col items-center">
              <div className="h-full w-0.5 bg-white"></div>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-1/2">
                <Box />
              </div>
            </div>

            <div className="h-[2rem] flex flex-col items-center">
              <div className="h-full w-0.5 bg-white"></div>
            </div>

            <div className="w-full flex justify-center">
              <div className="w-1/2">
                <Box />
              </div>
            </div>

            <div className="h-[2rem] flex flex-col items-center">
              <div className="h-1/2 w-0.5 bg-white"></div>
              <div className="h-1/2 w-[21.5rem] border-x-2 border-t-2 border-white"></div>
            </div>
            <div className="flex space-x-6">
              <Box />
              <Box />
            </div>
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full space-y-[8rem]">
            {[...Array(2)].map((_, i) => (
              <div
                className="h-[16rem] rounded-xl flex justify-start items-center w-full"
                key={i}
              >
                <div className="w-1/2 h-0.5 bg-white"></div>
                <div className="w-1/2 h-[12rem] border-y-2 border-l-2 border-white"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full space-y-32">
            {[...Array(4)].map((_, i) => (
              <Box key={i} />
            ))}
          </div>
        </div>

        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full space-y-8">
            {[...Array(4)].map((_, i) => (
              <div
                className="h-[10rem] rounded-xl flex justify-start items-center w-full"
                key={i}
              >
                <div className="w-1/2 h-0.5 bg-white"></div>
                <div className="w-1/2 h-[6rem] border-y-2 border-l-2 border-white"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center w-full h-full">
          <div className="w-full space-y-8">
            {[...Array(8)].map((_, i) => (
              <Box key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const Box = () => {
  return (
    <div className="h-16 rounded-xl text-[#B79931] flex justify-center items-center w-full bg-[#202020]">
      TEAM NAME
    </div>
  );
};

export default Tournaments;
