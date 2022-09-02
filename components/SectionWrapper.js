const SectionWrapper = ({
  children,
  id,
  title,
  description,
  bgColor,
  height,
}) => {
  return (
    <section
      id={id}
      className={`text-white ${bgColor} py-[60px] md:py-[80px] lg:py-[120px] px-[15px] lg:h-[${height}]`}
    >
      <div className="max-w-[1200px] w-full m-auto">
        <h2 className="text-center text-[36px] md:text-[60px] lg:text-[50px] lg:text-[60px] font-bold">
          {title}
        </h2>
        <p className="text-center my-[15px] lg:m-0 p-0 md:px-[7%] lg:px-[21%] text-[rgba(198,201,216,.75)]">
          {description}
        </p>
        <div className="lg:my-[60px] flex flex-wrap justify-center">
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper;
