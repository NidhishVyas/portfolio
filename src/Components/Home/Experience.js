import React from "react";
import styled from "styled-components";
import ExEdu from "../Common/ExEdu";
import ExperienceData from "../../Data/Experience.json";
import SectionHeading from "../Common/SectionHeading";

const MainWrapper = styled.div`
  margin-top: 90px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    /* text-align: left; */
    margin-top: 80px;
  }
`;

const Experience = () => {
  return (
    <MainWrapper>
      <SectionHeading heading="SKILLS IN ACTION" subHeading="Experience" />
      {/* <SectionHeading heading="Experience" subHeading="Experience" /> */}
      {ExperienceData.map((item, i) => (
        <ExEdu data={item} key={i} />
      ))}
    </MainWrapper>
  );
};

export default Experience;

// Potential headings:
// "PROFESSIONAL JOURNEY"
// "CAREER MILESTONES"
// "WORK HISTORY"
// "INDUSTRY EXPERIENCE"
// "SKILLS IN ACTION"
// "MY CAREER PATH"
// "HANDS-ON EXPERIENCE"
// "EXPERTISE & GROWTH"
// "YEARS OF PRACTICE"
// "TRACK RECORD"
