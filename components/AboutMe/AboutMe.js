import Image from "next/image";
import { useState } from "react";
import ContentListTitle from "./ContentListTitle";
import EducationAndCertification from "./EducationAndCertification";
import Experience from "./Experience";
import MainSkills from "./MainSkills";

const AboutMe = () => {
  const [activeTitle, setActiveTitle] = useState("Main Skills");
  const handleClick = (e) => {
    if (e.target.nodeName === "UL") {
      return setActiveTitle("Main Skills");
    }
    setActiveTitle(e.target.innerText);
  };
  return (
    <>
      <div className="py-[60px] md:py-[80px] lg:py-[120px] px-[15px] lg:h-[100vh]">
        <div className="flex wrap-all flex-col w-[80%] lg:w-full lg:flex-row lg:justify-between items-center max-w-[1200px] m-auto">
          <Image
            src="/assets/about-me.jpg"
            alt="about-me"
            width={500}
            height={665}
          />
          <div className="lg:w-1/2 text-start mx-auto">
            <h2 className="poppins font-bold text-white text-[36px] md:text-[60px]">
              About Me
            </h2>
            <p className="text-[rgba(198,201,216,.75)] text-[16px] md:text-[18px] leading-[30px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered <a href="#">alteration</a> in some
              form, by injected humour, or randomised words which dont look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum,
            </p>
            <ul
              onClick={handleClick}
              className="relative leading-9 flex flex-wrap my-4 sm:justify-between text-white font-medium text-[18px]"
            >
              <ContentListTitle activeTitle={activeTitle} title="Main Skills" />
              <ContentListTitle activeTitle={activeTitle} title="Experience" />
              <ContentListTitle
                activeTitle={activeTitle}
                title="Education & Certification"
              />
            </ul>
            {activeTitle === "Main Skills" && <MainSkills />}
            {activeTitle === "Experience" && <Experience />}
            {activeTitle === "Education & Certification" && (
              <EducationAndCertification />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
