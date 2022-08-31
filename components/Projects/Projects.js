import SectionWrapper from "../SectionWrapper";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <SectionWrapper
      title="My Latest Projects"
      description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
      bgColor="bg-[#191919]"
    >
      <ProjectItem
        category="Development"
        title="Getting Tickets To The Big Show"
        bg="/assets/tech-bg-1.jpg"
      />
      <ProjectItem
        category="Development"
        title="Getting Tickets To The Big Show"
        bg="/assets/tech-bg-1.jpg"
      />
      <ProjectItem
        category="Development"
        title="Getting Tickets To The Big Show"
        bg="/assets/tech-bg-1.jpg"
      />
    </SectionWrapper>
  );
};

export default Projects;
