import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const MainWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 999;
  background-color: ${(props) => props.theme.Colors.LightestWhite};
  border-radius: 50%;
  backdrop-filter: blur(28px);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
`;

const CustomCursor = ({ x, y, isHovered }) => {
  return (
    <MainWrapper
      style={{ x: x, y: y }}
      initial={false}
      animate={{ scale: isHovered ? 1 : 0 }}
    >
      <div>See Website</div>
    </MainWrapper>
  );
};

export default CustomCursor;
