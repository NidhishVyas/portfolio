import React, { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
// import Icon from "./Icon";
import { ReactComponent as Logo } from "../../Images/Logo.svg";
import Resume from "../../Data/Resume - Nidhish Vyas.pdf";
import NavList from "../../Data/NavList.json";
import Hidden from "./Hidden";

const MainWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  margin: 0 auto;
  padding-top: 25px;
  width: 100%;
  top: 0;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    padding: 0;
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    padding: 0;
  }
`;

const MobMainDiv = styled.div`
  background-color: ${(props) => props.theme.Colors.LightestWhite};
  border-radius: 28px;
  width: 90%;
  margin: 0 auto;
  backdrop-filter: blur(25px);

  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 54px;
  /* border-bottom: 1px solid rgba(0, 0, 0, 0.2); */
`;

const LogoName = styled(Logo)`
  height: 30px;
  width: auto;
  fill: transparent;
  stroke: ${(props) => props.theme.Colors.PrimaryColor};
  color: ${(props) => props.theme.Colors.White};
  margin-left: 25px;
  @media ${(props) => props.theme.MediaQueries.m.query} {
    margin-left: 0;
  }
`;

const MenuDiv = styled.a`
  cursor: pointer;
  width: 64px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-left: 1px solid rgba(0, 0, 0, 0.2); */
`;

const DropMenu = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  z-index: 1000;
  color: ${(props) => props.theme.Colors.White};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    position: fixed;
    top: 95px;
    right: 20px;
    width: 300px;
    border-radius: 28px;
    background-color: ${(props) => props.theme.Colors.LightestWhite};
    backdrop-filter: blur(16px);
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    top: 125px;
    left: ${(props) => (props.isscrolled ? "50%" : undefined)};
    right: ${(props) => (props.isscrolled ? undefined : "4%")};
    transform: ${(props) => (props.isscrolled ? "translateX(73%)" : undefined)};
    /* transition: all 0.7s linear; */
  }
`;

const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px 20px 20px;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    /* flex-direction: row; */
    /* padding: 0; */
  }
`;

const NavItem = styled(motion.p)`
  font-size: 28px;
  font-family: ${(props) => props.theme.Fonts.Inter};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    /* font-size: 16px; */
  }
`;

// const Hidden = styled.div`
//   overflow: hidden;
// `;

const SocialsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const Socials = styled(motion.p)`
  font-size: 18px;
  font-family: ${(props) => props.theme.Fonts.Inter};
`;

const ResumeBtn = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  color: ${(props) => props.theme.Colors.White};
  font-size: 18px;
  border: 1px solid ${(props) => props.theme.Colors.White};
  border-radius: 15px;
  padding: 10px;
  margin: 30px auto 30px;
  font-family: ${(props) => props.theme.Fonts.Poppins};

  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: none;
  }
`;

const TabMainDiv = styled(motion.div)`
  display: none;
  background-color: ${(props) => props.theme.Colors.LightestWhite};
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.MediaQueries.m.query} {
    display: flex;
    backdrop-filter: blur(8px);
    position: relative;
    margin: ${(props) => (props.isscrolled ? 0 : "20px")};
    padding: ${(props) => (props.isscrolled ? "20px" : "10px 20px")};
    border-radius: ${(props) => (props.isscrolled ? 0 : "10px")};
  }

  @media ${(props) => props.theme.MediaQueries.l.query} {
    width: 90%;
    max-width: ${(props) => (props.isscrolled ? "1000px" : "100%")};
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    transition: all 0.5s linear;
  }
`;

const TabMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const MenuBtn = styled.button`
  border: 1px solid ${(props) => props.theme.Colors.Black};
  background-color: ${(props) => props.theme.Colors.White};
  color: ${(props) => props.theme.Colors.Black};
  padding: 10px 25px;
  border-radius: 10px;
  font-size: 18px;
`;

// const TabMenuList = styled.div`
//   background-color: ${(props) => props.theme.Colors.White};
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 20px;
//   background-color: ${(props) => props.theme.Colors.White};
//   position: absolute;
//   top: 62px;
//   right: 0;
//   width: 150px;
//   padding: 20px;
//   border-radius: 10px;
// `;

const NavBar = () => {
  const theme = useTheme();
  const [isSideNav, setIsSideNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(0);
  const toggleNav = () => setIsSideNav(!isSideNav);

  const { scrollYProgress } = useScroll();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const menuPath = "M3 12h18M3 6h18M3 18h18";
  const closePath = "M6 6L18 18M6 18L18 6";

  const socials = [
    { name: "Discord", link: "#" },
    { name: "LinkedIn", link: "#" },
    { name: "Github", link: "#" },
  ];

  const animationVariants = {
    hidden: { y: "100%" },
    visible: { y: 0 },
  };

  const animationProps = {
    initial: "hidden",
    animate: "visible",
    exit: "hidden",
    transition: { duration: 0.3, delay: 0.7 },
  };

  // const tabAnimateVariants = {
  //   animate: {
  //     margin: windowWidth >= 1024 && isScrolled ? "20px auto" : "20px 40px",
  //     width: windowWidth >= 1024 && isScrolled ? "1000px" : undefined,
  //   },
  // };

  // const tabAnimateProp = {
  //   animate: "animate",
  //   transition: { duration: 0.7 },
  // };

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setIsScrolled(value > 0);
  });

  return (
    <MainWrapper>
      <MobMainDiv>
        <Container>
          <LogoName />
          <MenuDiv onClick={toggleNav}>
            {/* <Icon name="bars" color={theme.Colors.White} /> */}
            <motion.svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke={theme.Colors.White}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <motion.path
                animate={{ d: isSideNav ? closePath : menuPath }}
                transition={{ duration: 1, type: "spring", stiffness: 150 }}
              />
            </motion.svg>
          </MenuDiv>
        </Container>

        <AnimatePresence>
          {isSideNav && (
            <DropMenu
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "calc(100vh - 130px)", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <NavDiv>
                {NavList.map((item, i) => (
                  <Hidden key={i}>
                    <NavItem variants={animationVariants} {...animationProps}>
                      {item}
                    </NavItem>
                  </Hidden>
                ))}
              </NavDiv>
              <SocialsDiv>
                {socials.map((item, i) => (
                  <Hidden key={i}>
                    <Socials
                      href={item.link}
                      variants={animationVariants}
                      {...animationProps}
                    >
                      {item.name}
                    </Socials>
                  </Hidden>
                ))}
              </SocialsDiv>
              {/* <Hidden>
                <ResumeBtn
                  href={Resume}
                  download="Resume - Nidhish Vyas.pdf"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  Resume
                </ResumeBtn>
              </Hidden> */}
            </DropMenu>
          )}
        </AnimatePresence>
      </MobMainDiv>
      <AnimatePresence>
        <TabMainDiv
          isscrolled={isScrolled}
          // transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <LogoName />
          <TabMenuDiv>
            <MenuBtn>Resume</MenuBtn>
            <MenuBtn onClick={toggleNav}>Menu</MenuBtn>
          </TabMenuDiv>
        </TabMainDiv>
      </AnimatePresence>
      {isSideNav && windowWidth >= 768 && (
        <AnimatePresence>
          <DropMenu
            isscrolled={isScrolled}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "600px", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <NavDiv>
              {NavList.map((item, i) => (
                <Hidden key={i}>
                  <NavItem variants={animationVariants} {...animationProps}>
                    {item}
                  </NavItem>
                </Hidden>
              ))}
            </NavDiv>
            <SocialsDiv>
              {socials.map((item, i) => (
                <Hidden key={i}>
                  <Socials
                    href={item.link}
                    variants={animationVariants}
                    {...animationProps}
                  >
                    {item.name}
                  </Socials>
                </Hidden>
              ))}
            </SocialsDiv>
            <ResumeBtn href={Resume} download="Resume - Nidhish Vyas.pdf">
              Resume
            </ResumeBtn>
          </DropMenu>
        </AnimatePresence>
      )}
    </MainWrapper>
  );
};

export default NavBar;
