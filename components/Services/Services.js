import SectionWrapper from "../SectionWrapper";
import ServiceItem from "./ServiceItem";

const Services = () => {
  return (
    <>
      <SectionWrapper
        title="My Awesome Service"
        description="There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration."
        bgColor="bg-[#101010]"
        height="100vh"
        id="services"
      >
        <ServiceItem
          title="Business Strategy"
          description="I throw myself down among the tall grass by the stream as I lie close to the earth."
        >
          <path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path>
          <line x1="2" y1="20" x2="2" y2="20"></line>
        </ServiceItem>
        <ServiceItem
          title="Website Development"
          description="I throw myself down among the tall grass by the stream as I lie close to the earth."
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </ServiceItem>
        <ServiceItem
          title="Marketing & Reporting"
          description="I throw myself down among the tall grass by the stream as I lie close to the earth."
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </ServiceItem>
      </SectionWrapper>
    </>
  );
};

export default Services;
