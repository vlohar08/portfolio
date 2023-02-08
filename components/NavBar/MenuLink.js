const MenuLink = ({ title, link, activeSection }) => {
  return (
    <a
      data-active={activeSection === title}
      data-menu={title.toLowerCase()}
      className="link-title relative font-semibold text-white mx-[15px] py-[20px]"
      href={link}
    >
      {title}
    </a>
  );
};

export default MenuLink;
