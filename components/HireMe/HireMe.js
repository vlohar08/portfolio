import Image from "next/image";

const HireMe = () => {
  const inputStyle =
    "focus:outline-0 px-[20px] py-[12px] placeholder:text-[hsla(0,0%,100%,.4)] rounded-md bg-transparent border-2 border-[hsla(0,0%,100%,.2)] my-2";
  return (
    <section
      id="contact"
      className="bg-[#101010] poppins py-[60px] lg:py-[120px] px-[30px]"
    >
      <div className="flex flex-wrap justify-between text-white max-w-[1200px] m-auto">
        <div className="lg:w-1/2 order-2 lg:order-none mt-2 lg:m-0">
          <h2 className="text-[36px] font-medium md:text-[60px] lg:text-[50px] xl:text-[60px]">
            Hire Me
          </h2>
          <p className="text-[#c6c9d8] text-[16px] md:text-[18px]">
            I am available for freelance work. Connect with me via phone: 01923
            088574 or email: admin@example.com
          </p>
          <form className="flex flex-col" method="post">
            <input className={inputStyle} type="text" placeholder="Your Name" />
            <input
              className={inputStyle}
              type="text"
              placeholder="Your Email"
            />
            <input
              className={inputStyle}
              type="text"
              placeholder="Write a Subject"
            />
            <textarea
              className={`${inputStyle} h-[150px] placeholder:`}
              type="text"
              placeholder="Your Message"
            />
            <button
              className="w-[154px] h-[52px] transition-all hover:translate-y-[-7%] mt-2 font-bold hover:bg-transparent border-[2px] border-[#f9004d] rounded-md bg-[#f9004d]"
              type="submit"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="lg:w-[45%]">
          <Image
            className="order-1 lg:order-none object-cover"
            src="/assets/about.jpg"
            width={580}
            height={613}
            alt="Hire me"
          />
        </div>
      </div>
    </section>
  );
};

export default HireMe;
