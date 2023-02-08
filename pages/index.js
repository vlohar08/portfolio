import AboutMe from "../components/AboutMe/AboutMe";
import Footer from "../components/Footer/Footer";
import HireMe from "../components/HireMe/HireMe";
import MainHeroSection from "../components/MainHeroSection";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";

export default function Home() {
  return (
    <main className="bg-[#191919]">
      <MainHeroSection />
      <AboutMe />
      <Services />
      <Projects />
      <HireMe />
      <Footer />
    </main>
  );
}
