import React from "react";
import styled from "styled-components";

const OverlappingContainer = styled.div`
  margin: 15px 0 40px;
  position: relative;
`;

const SubHeading = styled.p`
  color: ${(props) => props.theme.Colors.White};
  text-transform: uppercase;
  font-size: 20px;
  font-family: ${(props) => props.theme.Fonts.Quicksand};
  position: absolute;
  top: 50%;
  left: 50%;
  /* bottom: 5px; */
  transform: translate(-50%, -50%);
  /* transform: translateX(-50%); */
  z-index: 2;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 16px;
  }
`;

const MainHeading = styled.div`
  font-size: 39px;
  font-family: ${(props) => props.theme.Fonts.Quicksand};
  color: ${(props) => props.theme.Colors.PrimaryColor};
  font-weight: 700;
  text-shadow: -1px -1px 0 ${(props) => props.theme.Colors.LightestWhite},
    1px -1px 0 ${(props) => props.theme.Colors.LightestWhite},
    -1px 1px 0 ${(props) => props.theme.Colors.LightestWhite},
    1px 1px 0 ${(props) => props.theme.Colors.LightestWhite};
  text-transform: uppercase;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 48px;
  }
`;

const SectionHeading = ({ subHeading, heading }) => {
  return (
    <OverlappingContainer>
      <SubHeading>{subHeading}</SubHeading>
      <MainHeading>{heading}</MainHeading>
    </OverlappingContainer>
  );
};

export default SectionHeading;
