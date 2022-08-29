import AboutMe from "../components/AboutMe/AboutMe";
import MainHeroSection from "../components/MainHeroSection";
import NavBar from "../components/NavBar/NavBar";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap");
        `}
      </style>
      <div className="bg-[#191919]">
        <NavBar />
        <MainHeroSection />
        <AboutMe />
        <Services />
      </div>
    </>
  );
}
