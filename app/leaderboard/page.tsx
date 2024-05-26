import Image from "next/image";
import config from "../../config.json";
import identity from "../../public/assets/identity.svg";
import clock from "../../public/assets/deaths.svg";
import kills from "../../public/assets/crosshair.svg";
import SideBar from "@/components/navbar";
const Leaderboard: React.FC = () => {
  return (
    <div className="w-full flex justify-end items-center relative">
      <SideBar current="Leaderboard" className="top-20" />
      <div className="pr-5 my-5 w-3/4">
        <div className="bg-[#161616] p-5 rounded-3xl">
          <header className="p-10 bg-primary-orange rounded-3xl">
            <h1 className="text-3xl">TOP 10 PLAYERS</h1>
          </header>
          <table className="w-full border-separate border-spacing-16">
            <thead>
              <tr className="text-left p-5 border-b-2 border-primary-orange">
                <th className="flex items-center gap-x-1 ">
                  <Image
                    src={identity}
                    alt="identity"
                    height={50}
                    width={50}
                    color="white"
                  />
                  NAME
                </th>
                <th>RANK</th>
                <th>DEATHS</th>
                <th>KILLS</th>
                <th>K/D/A</th>
              </tr>
            </thead>
            <tbody className="h-16 overflow-scroll">
              {config.leaderboard.map((player, i) => (
                <tr key={i} className="">
                  <td className="flex items-center">
                    <div className="rounded-full overflow-hidden">
                      <Image
                        src={player.avatar}
                        alt="Avatar"
                        width={50}
                        height={50}
                      />
                    </div>
                    <span className="font-bold pl-4 text-primary-orange">
                      {player.name}
                    </span>
                  </td>
                  <td>Rank {player.rank}</td>
                  <td>{player.deaths}</td>
                  <td>{player.kills}</td>
                  <td>
                    {Math.floor(
                      (parseInt(player.kills) / parseInt(player.deaths)) * 100,
                    ) / 100}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
