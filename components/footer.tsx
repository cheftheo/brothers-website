import Image from "next/image";
import map from "../public/assets/map.png";
import characters from "../public/assets/characters.png";
import logo from "../public/assets/logo.png";
import Discord from "./discord";

const Footer: React.FC = () => {
  return (
    <main
      className="w-full flex justify-between items-center bg-center bg-cover"
      style={{ backgroundImage: `url(${map.src})` }}
    >
      <div className="w-3/4 flex flex-col justify-center py-5">
        <Image src={logo} alt="logo" className="pl-32 mb-4" />
        <div className="pl-40">
          <ul className="uppercase list-disc ">
            <ListItem>
              grand theft auto and grand theft auto: V are registered
              tradermarks of <b>Take-two interactive software</b>
            </ListItem>
            <ListItem>
              we are not affiliated with or endorsed by{" "}
              <b>take-two interactive software</b>
            </ListItem>
          </ul>
        </div>

        <Discord />
      </div>
      <div className="w-1/4">
        <Image src={characters} alt="image" />
      </div>
    </main>
  );
};

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <li className="text-white opacity-40 last:mb-0 mb-5">{children}</li>;
};

export default Footer;
