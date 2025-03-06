import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectListDesktop from "../Project/ProjectListDesktop";
import ProjectListMobile from "../Project/ProjectListMobile";
import SectionHeading from "../Common/SectionHeading";

const MainWrapper = styled.div`
  margin-top: 90px;
  text-align: center;

  @media ${(props) => props.theme.MediaQueries.l.query} {
    /* text-align: left; */
    margin-top: 80px;
  }
`;

const Projects = () => {
  const [isDesktop, setisDesktop] = useState(
    window.innerWidth > 1023 ? true : false
  );

  useEffect(() => {
    window.onresize = (e) => {
      if (e.target.innerWidth > 1023) setisDesktop(true);
      else setisDesktop(false);
    };
  }, []);

  return (
    <MainWrapper>
      <SectionHeading heading="SELECTED WORKS" subHeading="Projects" />
      {/* <SectionHeading heading="Curated Works" subHeading="Projects" /> */}
      {isDesktop ? <ProjectListDesktop /> : <ProjectListMobile />}
    </MainWrapper>
  );
};

export default Projects;

// Potential headings:
// "CREATIVE WORKS"
// "FEATURED PORTFOLIO"
// "SHOWCASE"
// "DESIGN COLLECTION"
// "SELECTED WORKS"
// "MY CREATIONS"
// "INNOVATIVE IDEAS"
// "WORK IN ACTION"
// "CASE STUDIES"
// "PORTFOLIO HIGHLIGHTS"
