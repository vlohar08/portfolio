const ServiceItem = ({ title, description, children }) => {
  return (
    <div
      className="w-[290px] h-[268px] sm:w-[240px] sm:h-[324px] md:w-[330px] md:h-[254px]
    lg:w-[290px] lg:h-[314px] xl:w-[370px] xl:h-[330px] px-[30px] py-[14px] xl:px-[45px] 
    xl:py-[60px] m-3 bg-red-600 sm:bg-[#202020] hover:translate-y-[-2%] transition-all 
    duration-300 group hover:bg-red-600 text-white rounded-xl"
    >
      <svg
        className="text-white sm:text-red-600 group-hover:text-white"
        stroke="currentColor"
        fill="none"
        strokeWidth="1"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        height="55px"
        width="55px"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
      <h3 className="text-[20px] md:text-[22px] lg:text-[24px] font-medium my-[19px]">
        {title}
      </h3>
      <p className="text-[18px] text-white group-hover:text-white sm:text-[rgba(198,201,216,.75)]">
        {description}
      </p>
    </div>
  );
};

export default ServiceItem;
