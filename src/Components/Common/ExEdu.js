import React from "react";
import styled from "styled-components";
// import Icon from "./Icon";
import formatDate from "../../Helpers/formatdate";
// import Aries from "../../Images/aries.png";
// import NJIT from "../../Images/njit logo.png";
// import { motion } from "framer-motion";

const MainWrapper = styled.div`
  margin-bottom: 40px;
`;

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* flex-direction: column; */
  gap: 20px;

  /* @media ${(props) => props.theme.MediaQueries.m.query} {
    justify-content: flex-start;
  } */
  @media ${(props) => props.theme.MediaQueries.l.query} {
    flex-direction: row;
  }
`;

const ImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 60px;
  /* height: 50px; */
  width: 15%;
  aspect-ratio: 1;
  /* border: 1px solid ${(props) => props.theme.Colors.TextColor}; */
  box-shadow: 0 0px 10px ${(props) => props.theme.Colors.LightWhite};
  border-radius: 15px;
`;

const ExLogo = styled.img`
  /* height: 50px; */
  width: 100%;
  max-width: 60px;
  aspect-ratio: 1;
  border-radius: 15px;
  background-color: ${(props) => props.theme.Colors.White};

  &.dark {
    filter: invert(100%);
  }
`;

const Content = styled.div`
  width: 80%;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    width: 100%;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.nospace ? "flex-start" : "space-between"};
  align-items: flex-start;
  text-align: left;
  /* margin-bottom: 12px; */
  flex-direction: ${(props) => (props.colrev ? "column-reverse" : "column")};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    flex-direction: row;
    align-items: center;
  }
`;

const Heading = styled.div`
  font-size: 18px;
  font-family: ${(props) => props.theme.Fonts.Quicksand};
  font-weight: 700;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 24px;
  }
`;

const SubHeading = styled.div`
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 14px;
  margin: 2px 0 7px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 16px;
  }
`;

const DateDivMob = styled.div`
  display: block;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 14px;
  color: ${(props) => props.theme.Colors.TextColor};

  @media ${(props) => props.theme.MediaQueries.l.query} {
    display: none;
  }
`;

const DateDivTab = styled.div`
  display: none;
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 16px;
  color: ${(props) => props.theme.Colors.TextColor};

  @media ${(props) => props.theme.MediaQueries.l.query} {
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
  color: ${(props) => props.theme.Colors.TextColor};
`;

// const TechStackDiv = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   margin-top: 12px;
//   gap: 10px;
//   flex-wrap: wrap;
// `;

// const TechStack = styled(motion.div)`
//   padding: 4px 12px;
//   border: 1px solid ${(props) => props.theme.Colors.TextColor};
//   border-radius: 25px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media ${(props) => props.theme.MediaQueries.m.query} {
//     padding: 5px 15px;
//   }
// `;

// const Tech = styled.p`
//   font-size: 14px;
//   font-family: ${(props) => props.theme.Fonts.Poppins};
//   margin-left: 8px;
//   color: ${(props) => props.theme.Colors.TextColor};
// `;

// const TechImg = styled.img`
//   width: 16px;

//   &.dark {
//     filter: invert(100%);
//   }

//   &.bright {
//     filter: brightness(200%);
//   }

//   @media ${(props) => props.theme.MediaQueries.m.query} {
//     width: 20px;
//   }
// `;

const Experience = ({ data }) => {
  const courseworkList = data?.coursework ? data?.coursework.join(", ") : null;

  // const fadeInVariant = (id) => ({
  //   initial: {
  //     opacity: 0,
  //     y: 100,
  //   },
  //   animate: {
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       delay: id * 0.05,
  //       duration: 0.5,
  //       type: "spring",
  //     },
  //   },
  // });

  return (
    <MainWrapper>
      <MainDiv>
        <ImgDiv>
          <ExLogo
            src={require(`../../Images/${data.logo.img}`)}
            style={{ objectFit: data.logo.fit }}
            alt={data.logo.img}
            className={data.logo?.color === "dark" ? "dark" : ""}
          />
        </ImgDiv>
        <Content>
          <FlexDiv colrev="true">
            <Heading>{data?.university || data?.company}</Heading>
            <DateDivMob>
              {data?.startDate
                ? `${formatDate(data?.startDate).shortDate} - `
                : ""}
              {formatDate(data?.endDate).shortDate}
            </DateDivMob>
            <DateDivTab>
              {data?.startDate
                ? `${formatDate(data?.startDate).fullDate} - `
                : ""}
              {formatDate(data?.endDate).fullDate}
            </DateDivTab>
          </FlexDiv>
          <FlexDiv>
            <SubHeading>{data?.degree || data?.title}</SubHeading>
            {/* <Heading>{data?.location}</Heading> */}
          </FlexDiv>
          {courseworkList && (
            <CourseworkDiv>Coursework: {courseworkList}</CourseworkDiv>
          )}
        </Content>
      </MainDiv>

      {/* {data.description?.map((point, index) => (
        <FlexDiv key={index} flexstart="true" nospace="true">
          <Icon name="asterisk" size="xs" style={{ margin: "3px 10px 0 0" }} />
          <Description>{point}</Description>
        </FlexDiv>
      ))} */}
    </MainWrapper>
  );
};

export default Experience;

// {data.techStack && (
//   <>
//     {/* <TechUsed>Technologies used:</TechUsed> */}
//     <TechStackDiv>
//       {/* <FlexDiv style={{ marginTop: "12px", flexWrap: "wrap" }}> */}
//       {data.techStack?.map((tech, i) => (
//         <TechStack
//           key={i}
//           variants={fadeInVariant(i)}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//         >
//           <TechImg
//             src={
//               tech.icon === "aries"
//                 ? Aries
//                 : `https://cdn.simpleicons.org/${tech.icon}`
//             }
//             alt={tech.name}
//             className={
//               tech?.color === "dark"
//                 ? "dark"
//                 : tech?.color === "bright"
//                 ? "bright"
//                 : ""
//             }
//           />
//           <Tech>{tech.name}</Tech>
//         </TechStack>
//       ))}
//       {/* </FlexDiv> */}
//     </TechStackDiv>
//   </>
// )}
