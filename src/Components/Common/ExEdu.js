import React from "react";
import styled from "styled-components";
// import Icon from "./Icon";
import formatDate from "../../Helpers/formatdate";

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
  font-family: ${(props) => props.theme.Fonts.Poppins};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    max-width: 100%;
  }
`;

const SubHeading = styled.div`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 16px;
`;

const DateDivMob = styled.div`
  display: block;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 16px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: none;
  }
`;

const DateDivTab = styled.div`
  display: none;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 16px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: block;
  }
`;

// const Description = styled.div`
//   margin-left: 5px;
//   font-family: ${(props) => props.theme.Fonts.Inter};
//   font-size: 14px;
// `;

const CourseworkDiv = styled.p`
  font-family: ${(props) => props.theme.Fonts.Inter};
  font-size: 14px;
  text-align: left;
`;

const TechStackDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 12px;
  gap: 10px;
  flex-wrap: wrap;
`;

const TechStack = styled.div`
  padding: 4px 12px;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tech = styled.p`
  font-size: 14px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  margin-left: 8px;
`;

// const TechUsed = styled.p`
//   font-family: ${(props) => props.theme.Fonts.Inter};
//   font-size: 14px;
//   text-align: left;
// `;

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
        <DateDivMob>
          {data?.startDate ? `${formatDate(data?.startDate).shortDate} -` : ""} {formatDate(data?.endDate).shortDate}
        </DateDivMob>
        <DateDivTab>
          {data?.startDate ? `${formatDate(data?.startDate).shortDate} -` : ""} {formatDate(data?.endDate).shortDate}
        </DateDivTab>
      </FlexDiv>
      {/* {data.description?.map((point, index) => (
        <FlexDiv key={index} flexstart="true" nospace="true">
          <Icon name="asterisk" size="xs" style={{ margin: "3px 10px 0 0" }} />
          <Description>{point}</Description>
        </FlexDiv>
      ))} */}
      {courseworkList && (
        <CourseworkDiv>Coursework: {courseworkList}</CourseworkDiv>
      )}
      {data.techStack && (
        <>
          {/* <TechUsed>Technologies used:</TechUsed> */}
          <TechStackDiv>
            {/* <FlexDiv style={{ marginTop: "12px", flexWrap: "wrap" }}> */}
            {data.techStack?.map((tech, i) => (
              <TechStack key={i}>
                <img
                  src={`https://cdn.simpleicons.org/${tech}`}
                  alt={tech}
                  width="16"
                />
                <Tech>{tech}</Tech>
              </TechStack>
            ))}
            {/* </FlexDiv> */}
          </TechStackDiv>
        </>
      )}
    </MainDiv>
  );
};

export default Experience;
