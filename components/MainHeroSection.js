const MainHeroSection = () => {
  return (
    <>
      <style jsx>{`
        .wrapper {
          background: url("./assets/main-hero-section-bg.jpg");
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
        .skills > span {
          animation: spin-words 6s infinite;
        }

        @keyframes spin-words {
          0% {
            transform: translateY(100%);
          }
          20% {
            transform: translateY(-10%);
          }
          40% {
            transform: translateY(-0%);
          }
          60% {
            transform: translateY(-110%);
          }
          80% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(-200%);
          }
        }
      `}</style>
      <section
        id="home"
        className="wrapper relative bg-right w-[100vw] h-[50vh] sm:h-[80vh] lg:h-[100vh] bg-black text-white"
      >
        <div className="absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%] p-7 w-[100%] max-w-[1200px]">
          <p className="montserrat font-400 text-[13px] sm:text-[15px] text-[#c6d9d8]">
            WELCOME TO MY WORLD
          </p>
          <h1 className="montserrat font-semibold flex flex-col text-[28px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
            Hi, I&apos;m Vishal Lohar
            <br />
            <div className="text-red-500 flex flex-col h-[45px] sm:h-[52px] md:h-[67px] lg:h-[83px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px] skills overflow-hidden">
              <span>Full Stack Developer</span>
              <span>WordPress Developer</span>
            </div>
          </h1>
          <h2 className="poppins text-[28px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[60px]">
            based in India.
          </h2>
        </div>
      </section>
    </>
  );
};

export default MainHeroSection;
