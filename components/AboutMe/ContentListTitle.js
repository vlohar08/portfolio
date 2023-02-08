const ContentListTitle = ({ activeTitle, title }) => {
  return (
    <li
      data-active={activeTitle === title}
      className="content-list-title relative cursor-pointer mr-6 my-2 sm:m-0"
    >
      {title}
    </li>
  );
};

export default ContentListTitle;
