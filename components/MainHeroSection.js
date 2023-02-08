const MainHeroSection = () => {
  return (
    <section
      id="home"
      className="bg-hero-image bg-no-repeat bg-cover relative bg-right w-full h-[50vh] sm:h-[80vh] lg:h-[100vh] bg-black text-white"
    >
      <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] p-7 w-[100%] max-w-[1200px]">
        <p className="font-montserrat font-400 text-[13px] sm:text-[15px] text-[#c6d9d8]">
          WELCOME TO MY WORLD
        </p>
        <h1 className="font-montserrat font-semibold flex flex-col text-[28px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
          Hi, I&apos;m Vishal Lohar
          <br />
          <div className="text-red-500 flex flex-col h-[45px] sm:h-[52px] md:h-[67px] lg:h-[83px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] skills overflow-hidden">
            <span>Full Stack Developer</span>
            <span>WordPress Developer</span>
          </div>
        </h1>
        <h2 className="font-poppins text-[28px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
          based in India.
        </h2>
      </div>
    </section>
  );
};

export default MainHeroSection;
