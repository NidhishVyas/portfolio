import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, useInView } from "framer-motion";

import ProjectsData from "../../Data/ProjectsData.json";
import Icon from "../Common/Icon";
import ProjectDescription from "./ProjectDescription";

import ProjImg from "../../Images/hero.png";

const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectImageList = styled.div`
  max-width: 65%;
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

const ProjectImage = styled.img`
  object-fit: cover;
  height: auto;
  max-width: 85%;
  margin: 0 auto;
  border-radius: 10px 10px 0 0;
  transform: translateY(20px);
`;

const ProjectImgDiv = styled(motion.div)`
  backdrop-filter: blur(28px);
  background-color: ${(props) => props.theme.Colors.LightestWhite};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 40px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 5%,
      rgba(255, 255, 255, 0.8) 35%,
      rgb(255, 255, 255) 50%,
      rgba(255, 255, 255, 0.8) 65%,
      rgba(0, 0, 0, 0) 95%
    );
  }

  &:hover ${ProjectImage} {
    rotate: -3deg;
    transition: all 0.3s;
  }
`;

const ProjectColor = styled.div`
  height: calc(100% - 15px);
  width: calc(100% - 15px);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 7px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 20%,
      rgb(255, 255, 255) 50%,
      rgba(0, 0, 0, 0) 80%
    );
  }
`;

const ProjectGistDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 48px;
`;

const ProjectGist = styled.p`
  font-size: 22px;
  text-align: left;
  width: 90%;
  font-family: ${(props) => props.theme.Fonts.Inter};
`;

const ProjectListDesktop = () => {
  const activeProjectRef = useRef(ProjectsData[0]);
  const projectDescriptionRef = useRef(null);

  const setActiveProject = (newProject) => {
    if (
      activeProjectRef.current &&
      activeProjectRef.current.name !== newProject.name
    ) {
      activeProjectRef.current = newProject;

      if (projectDescriptionRef.current) {
        projectDescriptionRef.current.updateProject(newProject);
      }
    }
  };

  const ProjectItem = ({ data, setActiveProject, activeProjectRef }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.8, once: false });

    useEffect(() => {
      if (
        inView &&
        activeProjectRef.current &&
        activeProjectRef.current.name !== data.name
      ) {
        setActiveProject(data);
      }
    }, [inView, data, setActiveProject, activeProjectRef]);

    return (
      <AnimatePresence>
        <motion.div
          ref={ref}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5, once: false }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
        >
          <ProjectImgDiv>
            <ProjectColor style={{ backgroundColor: data.color }}>
              <ProjectGistDiv>
                <ProjectGist>
                  {data.gist}
                </ProjectGist>
                <Icon name="arrow-right" />
              </ProjectGistDiv>
              <ProjectImage src={ProjImg} alt={data.name} />
            </ProjectColor>
          </ProjectImgDiv>
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -75 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 75 }}
        transition={{ duration: 0.5 }}
      >
        <MainWrapper>
          <ProjectImageList>
            {ProjectsData.map((data, i) => (
              <ProjectItem
                key={i}
                data={data}
                setActiveProject={setActiveProject}
                activeProjectRef={activeProjectRef}
              />
            ))}
          </ProjectImageList>
          <ProjectDescription ref={projectDescriptionRef} />
        </MainWrapper>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectListDesktop;
