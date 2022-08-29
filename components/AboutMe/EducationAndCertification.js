import ContentList from "./ContentList";

const EducationAndCertification = (display) => {
  return (
    <>
      <ul
        className={
          "flex flex-col text-[16px] md:text-[18px] text-[rgba(198,201,216,.75)]"
        }
      >
        <ContentList
          title="BSc In CSE"
          subTitle="ABC University, Los Angeles, CA"
          description="2010"
        />
        <ContentList
          title="Diploma in Computer Science"
          subTitle="Gamma Technical Institute"
          description="2009"
        />
        <ContentList
          title="Graphic Designer"
          subTitle="ABC Institute, Los Angeles, CA"
          description="2007"
        />
      </ul>
    </>
  );
};

export default EducationAndCertification;
