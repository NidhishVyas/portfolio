import React from "react";
import styled from "styled-components";

const HiddenDiv = styled.div`
  overflow: hidden;

  &:hover {
    overflow: visible;
  }
`;

const Hidden = ({ children }) => {
  return <HiddenDiv>{children}</HiddenDiv>;
};

export default Hidden;
