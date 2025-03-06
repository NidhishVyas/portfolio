import React from "react";
import styled from "styled-components";
import ExEdu from "../Common/ExEdu";
import EducationData from "../../Data/Education";
import SectionHeading from "../Common/SectionHeading";

const MainWrapper = styled.div`
  margin-top: 90px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    /* text-align: left; */
    margin-top: 80px;
  }
`;

const Education = () => {
  return (
    <MainWrapper>
      <SectionHeading heading="LEARNING PATH" subHeading="Education" />
      {/* <SectionHeading heading="Education" subHeading="Education" /> */}
      {EducationData.map((item, i) => (
        <ExEdu data={item} key={i} />
      ))}
    </MainWrapper>
  );
};

export default Education;

// potential headings:
// "ACADEMIC JOURNEY"
// "LEARNING PATH"
// "KNOWLEDGE BASE"
// "STUDIES & EXPERIENCE"
// "EDUCATIONAL BACKGROUND"
// "SCHOLASTIC HISTORY"
// "MY ACADEMICS"
// "FORMAL LEARNING"
// "INTELLECTUAL GROWTH"
// "QUALIFICATIONS"