import React from "react";
import styled from "styled-components";
import ExEdu from "../Common/ExEdu";
import ExperienceData from "../../Data/Experience.json";
import SectionHeading from "../Common/SectionHeading";

const MainWrapper = styled.div`
  margin-top: 60px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    /* text-align: left; */
    margin-top: 80px;
  }
`;

const Experience = () => {
  return (
    <MainWrapper>
      <SectionHeading heading="Experience" subHeading="Experience" />
      {ExperienceData.map((item, i) => (
        <ExEdu data={item} key={i} />
      ))}
    </MainWrapper>
  );
};

export default Experience;
