import ContentList from "./ContentList";

const MainSkills = () => {
  return (
    <>
      <ul className="flex flex-col text-[16px] md:text-[18px] text-[rgba(198,201,216,.75)]">
        <ContentList
          title="User experience design"
          subTitle="UI/UX"
          description="Delight the user and make it work."
        />
        <ContentList
          title="Web and user interface design"
          subTitle="Development"
          description="Websites, web experiences, ..."
        />
        <ContentList
          title="Interaction design"
          subTitle="Animation"
          description="I like to move it move it."
        />
      </ul>
    </>
  );
};

export default MainSkills;
