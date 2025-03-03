import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

const MainDiv = styled.div`
  margin-bottom: 40px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.nospace ? "flex-start" : "space-between"};
  align-items: ${(props) => (props.flexstart ? "flex-start" : "center")};
  text-align: left;
  margin-bottom: 12px;
`;

const Heading = styled.div`
  font-size: 18px;
  max-width: 200px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 100%;
  }
`;

const SubHeading = styled.div`
  font-size: 16px;
`;

const Description = styled.div`
  margin-left: 5px;
`;

const CourseworkDiv = styled.p`
text-align: left;
`;
const Experience = ({ data }) => {
  const courseworkList = data?.coursework ? data?.coursework.join(", ") : null;

  return (
    <MainDiv>
      <FlexDiv flexstart="true">
        <Heading>{data?.university || data?.company}</Heading>
        <Heading>{data?.location}</Heading>
      </FlexDiv>
      <FlexDiv>
        <SubHeading>{data?.degree || data?.title}</SubHeading>
        <SubHeading>
          {data?.startDate ? `${data?.startDate} -` : ""} {data?.endDate}
        </SubHeading>
      </FlexDiv>
      {data.description?.map((point, index) => (
        <FlexDiv key={index} flexstart="true" nospace="true">
          <Icon name="asterisk" size="xs" style={{ margin: "3px 10px 0 0" }} />
          <Description>{point}</Description>
        </FlexDiv>
      ))}
      {courseworkList && <CourseworkDiv>Coursework: {courseworkList}</CourseworkDiv>}
      {/* <CourseworkDiv>
        <Coursework>
          Coursework -
          {data.coursework?.map((course, index) => (
            <CourseworkList key={index}>{course}</CourseworkList>
          ))}
        </Coursework>
      </CourseworkDiv> */}
    </MainDiv>
  );
};

export default Experience;
