import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectListDesktop from "../Project/ProjectListDesktop";
import ProjectListMobile from "../Project/ProjectListMobile";
import SectionHeading from "../Common/SectionHeading";

const MainWrapper = styled.div`
  margin-top: 60px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    /* text-align: left; */
    margin-top: 80px;
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
      <SectionHeading heading="Curated Works" subHeading="Projects" />
      {isDesktop ? <ProjectListDesktop /> : <ProjectListMobile />}
    </MainWrapper>
  );
};

export default Projects;
