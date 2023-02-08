import { useEffect, useState } from "react";
import MenuLink from "./MenuLink";
import { useWindow } from "/context/WindowContext";

const MainMenu = ({ menuStyle }) => {
  const [activeSection, setActiveSection] = useState("Home");
  const windowData = useWindow();

  useEffect(() => {
    const sections = document.getElementsByTagName("section");
    for (let section of sections) {
      let data = section.getBoundingClientRect();
      let link = document.querySelector(`a[data-menu=${section.id}]`);
      if (link && data.top <= 100 && data.height >= Math.abs(data.top)) {
        setActiveSection(link.innerText);
      }
    }
  }, [windowData]);

  return (
    <>
      <nav className={`${menuStyle} nav-menu md:block ml-7`}>
        <MenuLink title="Home" link="#home" activeSection={activeSection} />
        <MenuLink title="About" link="#about" activeSection={activeSection} />
        <MenuLink
          title="Services"
          link="#services"
          activeSection={activeSection}
        />
        <MenuLink
          title="Portfolio"
          link="#portfolio"
          activeSection={activeSection}
        />
        <MenuLink
          title="Contact"
          link="#contact"
          activeSection={activeSection}
        />
      </nav>
    </>
  );
};

export default MainMenu;
