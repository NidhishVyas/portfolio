import React from "react";
import styled from "styled-components";

const SubHeading = styled.p`
  color: ${(props) => props.theme.Colors.LightWhite};
  text-transform: uppercase;
  font-size: 14px;
  font-family: ${(props) => props.theme.Fonts.Inter};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 16px;
  }
`;

const MainHeading = styled.div`
  margin: 15px 0 40px;
  font-size: 30px;
  font-family: ${(props) => props.theme.Fonts.Quicksand};
  font-weight: 700;
  
  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 48px;
  }
`;

const SectionHeading = ({ subHeading, heading }) => {
  return (
    <>
      <SubHeading>{subHeading}</SubHeading>
      <MainHeading>{heading}</MainHeading>
    </>
  );
};

export default SectionHeading;
