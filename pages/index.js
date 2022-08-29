import Head from "next/head";
import AboutMe from "../components/AboutMe/AboutMe";
import MainHeroSection from "../components/MainHeroSection";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="bg-[#191919]">
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700&family=Poppins:wght@300;400;500;600&display=swap');
        </style>
      </Head>
      <NavBar />
      <MainHeroSection />
      <AboutMe />
    </div>
  );
}
