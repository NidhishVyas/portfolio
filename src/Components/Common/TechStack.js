import React from "react";
import styled from "styled-components";

const TechStackDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  margin: 16px 0;
  color: ${(props) => props.theme.Colors.TextColor};
`;

const Tech = styled.p`
  background-color: ${(props) => props.theme.Colors.TechBg};
  font-family: ${(props) => props.theme.Fonts.Poppins};
  font-size: 12px;
  padding: 3px 7px;
  border: 1px solid ${(props) => props.theme.Colors.LightestWhite};
  border-radius: 5px;
`;

const TechStack = ({ data }) => {
  return (
    <TechStackDiv>
      {data.map((tech, i) => (
        <Tech key={i}>{tech.name}</Tech>
      ))}
    </TechStackDiv>
  );
};

export default TechStack;
