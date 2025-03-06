import React from "react";
import styled from "styled-components";

const OverlappingContainer = styled.div`
  margin: 15px 0 40px;
  position: relative;

  &.about-me {
    @media ${(props) => props.theme.MediaQueries.l.query} {
      width: fit-content;
    }
  }
`;

const SubHeading = styled.p`
  color: ${(props) => props.theme.Colors.White};
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${(props) => props.theme.Fonts.Quicksand};
  font-weight: 700;
  position: absolute;
  /* top: 50%; */
  left: 50%;
  bottom: 5px;
  /* transform: translate(-50%, -50%); */
  transform: translateX(-50%);
  z-index: 2;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 22px;
    bottom: -5px;
  }
`;

const MainHeading = styled.div`
  font-size: 50px;
  font-family: ${(props) => props.theme.Fonts.Nats};
  color: ${(props) => props.theme.Colors.PrimaryColor};
  font-weight: 400;
  line-height: 50px;
  text-shadow: -1px -1px 0 ${(props) => props.theme.Colors.LightestWhite},
    1px -1px 0 ${(props) => props.theme.Colors.LightestWhite},
    -1px 1px 0 ${(props) => props.theme.Colors.LightestWhite},
    1px 1px 0 ${(props) => props.theme.Colors.LightestWhite};
  text-transform: uppercase;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 80px;
    font-weight: 700;
  }
`;

const SectionHeading = ({ subHeading, heading, about }) => {
  return (
    <OverlappingContainer className={about ? "about-me" : ""}>
      <SubHeading>{subHeading}</SubHeading>
      <MainHeading>{heading}</MainHeading>
    </OverlappingContainer>
  );
};

export default SectionHeading;
