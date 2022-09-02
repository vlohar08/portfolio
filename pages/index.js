import { useEffect, useState } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import HireMe from "../components/HireMe/HireMe";
import MainHeroSection from "../components/MainHeroSection";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import { debounce } from "lodash";

export default function Home() {
  const [windowData, setWindowData] = useState({ innerWidth: 0, scrollY: 0 });
  const handleWindowResize = () => {
    setWindowData((prevData) => ({
      ...prevData,
      innerWidth: window.innerWidth,
    }));
  };
  const handleWindowScroll = () => {
    console.log(1);
    setWindowData((prevData) => ({
      ...prevData,
      scrollY: window.scrollY,
    }));
  };
  useEffect(() => {
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    window.addEventListener(
      "scroll",
      debounce(handleWindowScroll, 50, { maxWait: 1000 })
    );
  }, []);

  return (
    <>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap");
        `}
      </style>
      <div className="bg-[#191919]">
        <NavBar windowData={windowData} />
        <MainHeroSection />
        <AboutMe />
        <Services />
        <Projects />
        <HireMe />
        <Footer />
      </div>
    </>
  );
}
