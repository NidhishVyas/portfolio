import React from "react";
import styled from "styled-components";
import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Projects from "../Components/Home/Projects";
import Education from "../Components/Home/Education";
import Experience from "../Components/Home/Experience";
import TechStack from "../Components/Home/MyTechStack";
import ContactMe from "../Components/Home/ContactMe";

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
`;

const Home = () => {
  return (
    <MainWrapper>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <TechStack />
      <ContactMe />
    </MainWrapper>
  );
};

export default Home;
