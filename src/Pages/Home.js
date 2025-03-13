import React from "react";
import styled from "styled-components";
// import { Route, Routes } from "react-router-dom";
// import * as ROUTES from "../Routes/routes";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Projects from "../Components/Home/Projects";
import Education from "../Components/Home/Education";
import Experience from "../Components/Home/Experience";
import TechStack from "../Components/Home/MyTechStack";
import ContactMe from "../Components/Home/ContactMe";
import TransitionDiv from "../Components/Common/TransitionDiv";

// import HeroImg from "../Images/heroimg.png";

const MainWrapper = styled.div`
  padding: 54px 20px 0;
  color: ${(props) => props.theme.Colors.White};
  max-width: 1000px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding: 54px 40px 0;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    margin: 80px auto 0;
  }

  @media ${(props) => props.theme.MediaQueries.xl.query} {
    max-width: 1200px;
  }
`;

const Home = () => {
  return (
    <MainWrapper>
      <div id="Home">
        <Hero />
      </div>
      <div id="About">
        <TransitionDiv>
          <About />
        </TransitionDiv>
      </div>
      <div id="Education">
        <TransitionDiv>
          <Education />
        </TransitionDiv>
      </div>
      <div id="Experience">
        <TransitionDiv>
          <Experience />
        </TransitionDiv>
      </div>
      <div id="Projects">
          <Projects />
      </div>
      <div id="Tech-Stack">
        <TransitionDiv amount="true">
          <TechStack />
        </TransitionDiv>
      </div>
      <div id="Contact-Me">
        <TransitionDiv>
          <ContactMe />
        </TransitionDiv>
      </div>
    </MainWrapper>
  );
};

export default Home;
