const ContentListTitle = ({ activeTitle, title }) => {
  return (
    <>
      <style jsx>
        {`
          .content-list-title::before {
            position: absolute;
            content: "";
            width: 30px;
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
      <li
        className={`${
          activeTitle === title ? "active" : ""
        } content-list-title relative cursor-pointer mr-6 my-2 sm:m-0`}
      >
        {title}
      </li>
    </>
  );
};

export default ContentListTitle;
