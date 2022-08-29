import ContentList from "./ContentList";

const Experience = () => {
  return (
    <>
      <ul className="flex flex-col text-[16px] md:text-[18px] text-[rgba(198,201,216,.75)]">
        <ContentList
          title="Sr. Front-end Engineer"
          subTitle="Google"
          description="2018 - Current"
        />
        <ContentList
          title="Front-end Engineer"
          subTitle="Microsoft"
          description="2017 - 2018"
        />
        <ContentList
          title="Software Engineer"
          subTitle="Alibaba"
          description="2013 - 2014"
        />
      </ul>
    </>
  );
};

export default Experience;
