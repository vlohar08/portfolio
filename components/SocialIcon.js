const Social = ({ children, link }) => {
  return (
    <a
      href={link}
      className="mx-2 text-white max-w-[24px] max-h-[24px] cursor-pointer"
    >
      <svg
        fill="currentcolor"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </a>
  );
};

export default Social;
