const SocialCircle = ({ children, link }) => {
  return (
    <a
      href={link}
      className="grid justify-center content-center mx-2 w-[50px] h-[50px] p-3 rounded-full border-2 border-gray-400 hover:border-red-600
    hover:bg-red-600 transition-all hover:translate-y-[-7%] text-gray-400 hover:text-white cursor-pointer"
    >
      <svg
        fill="currentcolor"
        width="24px"
        height="24px"
        viewBox="0 0 24px 24px"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </a>
  );
};

export default SocialCircle;
