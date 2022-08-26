const MainMenu = () => {
  const linkStyle = "font-semibold text-white mx-2";
  return (
    <nav className="hidden md:block w-fit mx-7">
      <a className={linkStyle} href="">
        Home
      </a>
      <a className={linkStyle} href="">
        About
      </a>
      <a className={linkStyle} href="">
        Service
      </a>
      <a className={linkStyle} href="">
        Portfolio
      </a>
      <a className={linkStyle} href="">
        Blog
      </a>
      <a className={linkStyle} href="">
        Contact
      </a>
    </nav>
  );
};

export default MainMenu;
