const ProjectItem = ({ title, category, bg }) => {
  return (
    <div
      className="relative w-[320px] h-[440px] sm:w-[270px] sm:h-[440px] lg:h-[480px] xl:w-[370px] xl:h-[580px] 
      rounded-md bg-[#151515] p-10 hover:bg-gradient-to-b from-red-500 to-red-700 to-black 
      transition-all duration-500 hover:scale-105 m-3"
    >
      <div className="peer absolute bottom-[10%] left-0 text-center z-40">
        <p className="my-[18px] text-[16px] md:text-[14px] text-[rgba(198,201,216,.75)]">
          {category}
        </p>
        <h4 className="my-[18px] text-[24px] font-semibold">{title}</h4>
        <a href="#">
          <button
            type="button"
            className="border-2 border-[hsla(0,0%,100%,.3)] rounded-md py-1 px-5 hover:bg-red-600 
            hover:translate-y-[-10%] transition-all duration-500 hover:border-red-600"
          >
            View Details
          </button>
        </a>
      </div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="bg-cover opacity-40 peer-hover:opacity-10 absolute top-0 left-0 w-full h-full"
      ></div>
    </div>
  );
};

export default ProjectItem;
