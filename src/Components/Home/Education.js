import React from "react";
import styled from "styled-components";
import ExEdu from "../Common/ExEdu";
import EducationData from "../../Data/Education";
import SectionHeading from "../Common/SectionHeading";

const MainWrapper = styled.div`
  margin-top: 60px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    /* text-align: left; */
    margin-top: 80px;
  }
`;

const Education = () => {
  return (
    <MainWrapper>
      <SectionHeading heading="Education" subHeading="Education" />
      {EducationData.map((item, i) => (
        <ExEdu data={item} key={i} />
      ))}
    </MainWrapper>
  );
};

export default Education;
