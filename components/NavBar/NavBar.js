import Image from "next/image";
import Social from "../Social";
import MainMenu from "./MainMenu";

const NavBar = () => {
  return (
    <header className="w-[100vw] absolute top-0 z-50 flex justify-between items-center py-[20px] px-[50px]">
      <div className="flex items-center">
        <Image
          src="/assets/logo-symbol-dark.png"
          width={50}
          height={50}
          alt="site-logo"
        />
        <MainMenu />
      </div>
      <div className="w-[170px] flex justify-between items-center">
        <Social />
        <Image
          className="sm:!hidden"
          src="/assets/menu-right-lined.svg"
          width={40}
          height={40}
          alt="site-logo"
        />
      </div>
    </header>
  );
};

export default NavBar;
