const MenuLink = ({ title, link, activeSection }) => {
  const defaultStyle = "relative font-semibold text-white mx-[15px] py-[20px]";
  return (
    <>
      <style jsx>
        {`
          .link-title::before {
            position: absolute;
            content: "";
            width: 0px;
            height: 2px;
            bottom: 0;
            transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
            background: white;
          }
          .active::before {
            width: 100%;
            background: red;
          }
          .active {
            color: red;
          }
        `}
      </style>
      <a
        className={`${title.toLowerCase()} link-title ${defaultStyle} ${
          activeSection === title && "active"
        }`}
        href={link}
      >
        {title}
      </a>
    </>
  );
};

export default MenuLink;
