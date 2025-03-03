import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectListDesktop from "../Project/ProjectListDesktop";
import ProjectListMobile from "../Project/ProjectListMobile";

const MainWrapper = styled.div`
  margin-top: 60px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    /* text-align: left; */
    margin-top: 80px;
  }
`;

const SectionHeading = styled.p`
  color: ${(props) => props.theme.Colors.LightWhite};
  text-transform: uppercase;
  font-size: 14px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 16px;
  }
`;

const ProjectHeading = styled.div`
  margin: 15px 0 40px;
  font-size: 30px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    font-size: 48px;
  }
`;

const Projects = () => {
  const [isDesktop, setisDesktop] = useState(true);

  useEffect(() => {
    window.onresize = (e) => {
      if (e.target.innerWidth > 1023) setisDesktop(true);
      else setisDesktop(false);
    };
  }, []);

  return (
    <MainWrapper>
      <SectionHeading>Project</SectionHeading>
      <ProjectHeading>Curated Works</ProjectHeading>
      {isDesktop ? <ProjectListDesktop /> : <ProjectListMobile />}
      {/* <img
        key='react'
        src={`https://cdn.simpleicons.org/python`}
        alt='react'
        width="50"
      /> */}
    </MainWrapper>
  );
};

export default Projects;
