import Image from "next/image";
import { useState } from "react";
import SocialIcon from "../SocialIcon";
import MainMenu from "./MainMenu";

const NavBar = ({ windowData }) => {
  const [menuStyle, setMenuStyle] = useState("");
  const [mobileMenuIcon, setMobileMenuIcon] = useState(
    "/assets/menu-right-lined.svg"
  );
  const handleMobileMenu = () => {
    if (menuStyle === "") {
      setMenuStyle("!translate-x-0");
      setMobileMenuIcon("/assets/x-mark-lined.svg");
    } else {
      setMenuStyle("");
      setMobileMenuIcon("/assets/menu-right-lined.svg");
    }
  };
  return (
    <header
      className={`w-[100vw] ${
        windowData.scrollY < 200
          ? "absolute py-[20px]"
          : "fixed h-[70px] bg-[#191919]"
      } top-0 transition-all duration-300 ease-in-out z-50 flex justify-between items-center px-[30px] sm:px-[50px]`}
    >
      <div className="flex items-center">
        <Image
          src="/assets/site-logo.png"
          width={38}
          height={28}
          alt="site-logo"
        />
        <MainMenu menuStyle={menuStyle} windowData={windowData} />
      </div>
      <div className="w-fit flex justify-between items-center">
        <SocialIcon link="https://github.com/vlohar08">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </SocialIcon>
        <SocialIcon link="https://leetcode.com/vishal_lohar/">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />{" "}
        </SocialIcon>
        <SocialIcon link="https://www.linkedin.com/in/vishal-lohar/">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.42857 8.96884H13.1429V10.8193C13.6783 9.75524 15.0503 8.79887 17.1114 8.79887C21.0623 8.79887 22 10.9167 22 14.8028V22H18V15.6878C18 13.4748 17.4646 12.2266 16.1029 12.2266C14.2143 12.2266 13.4286 13.5722 13.4286 15.6878V22H9.42857V8.96884ZM2.57143 21.83H6.57143V8.79887H2.57143V21.83ZM7.14286 4.54958C7.14286 4.88439 7.07635 5.21593 6.94712 5.52526C6.81789 5.83458 6.62848 6.11565 6.3897 6.3524C6.15092 6.58915 5.86745 6.77695 5.55547 6.90508C5.24349 7.0332 4.90911 7.09915 4.57143 7.09915C4.23374 7.09915 3.89937 7.0332 3.58739 6.90508C3.27541 6.77695 2.99193 6.58915 2.75315 6.3524C2.51437 6.11565 2.32496 5.83458 2.19574 5.52526C2.06651 5.21593 2 4.88439 2 4.54958C2 3.87339 2.27092 3.22489 2.75315 2.74675C3.23539 2.26862 3.88944 2 4.57143 2C5.25341 2 5.90747 2.26862 6.3897 2.74675C6.87194 3.22489 7.14286 3.87339 7.14286 4.54958Z"
            fill="currentcolor"
          />
        </SocialIcon>
        {windowData.innerWidth < 768 && (
          <div className="ml-6" onClick={handleMobileMenu}>
            <Image
              className="sm:!hidden"
              src={mobileMenuIcon}
              width={40}
              height={40}
              alt="site-logo"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
