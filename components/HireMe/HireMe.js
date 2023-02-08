import Image from "next/image";

const HireMe = () => {
  return (
    <section
      id="contact"
      className="bg-[#101010] font-poppins py-[60px] lg:py-[120px] px-[30px]"
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
          <form
            action="https://docs.google.com/forms/d/e/1FAIpQLScdkELNu8jf4G2sky9EDC_mBvMnZir2CrGUaWU8Faiw2gBBaw/formResponse"
            className="flex flex-col"
            method="post"
          >
            <input
              className="form-input"
              name="entry.255781897"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="form-input"
              type="text"
              name="entry.186554619"
              placeholder="Your Email"
            />
            <input
              className="form-input"
              type="text"
              name="entry.1278516840"
              placeholder="Write a Subject"
            />
            <textarea
              className={`form-input h-[150px] placeholder:`}
              type="text"
              name="entry.347078715"
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
