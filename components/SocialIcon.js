const Social = ({ children, link }) => {
  return (
    <a
      href={link}
      className="transition-all mx-2 text-white hover:translate-y-[-7%] cursor-pointer"
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

export default Social;
