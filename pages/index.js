import Head from "next/head";
import AboutMe from "../components/AboutMe";
import MainHeroSection from "../components/MainHeroSection";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <div className="relative bg-[#1d1d24]">
      <Head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600&family=Poppins:wght@300;400;500;600&display=swap');
        </style>
      </Head>
      <NavBar />
      <MainHeroSection />
      <AboutMe />
    </div>
  );
}
