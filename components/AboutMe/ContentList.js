const ContentList = ({ title, subTitle, description }) => {
  return (
    <li className="my-2">
      <span className="font-medium">{title} - </span>
      {subTitle}
      <br />
      {description}
    </li>
  );
};

export default ContentList;
