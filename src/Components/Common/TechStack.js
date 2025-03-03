import React from "react";
import styled from "styled-components";

const TechStackDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  margin: 16px 0;
  color: ${(props) => props.theme.Colors.LightWhite};
`;

const Tech = styled.p`
  font-size: 14px;
  padding: 2px 5px;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  border-radius: 5px;
`;

const TechStack = ({ data }) => {
  return (
    <TechStackDiv>
      {data.map((tech, i) => (
        <Tech key={i}>{tech}</Tech>
      ))}
    </TechStackDiv>
  );
};

export default TechStack;
