import React, { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import Icon from "../Common/Icon";
import ProjectsData from "../../Data/ProjectsData.json";

const ProjectDetails = styled.div`
  width: 35%;
  height: 400px;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: sticky;
  top: 160px;
  align-self: flex-start;
  margin-top: 16px;
`;
const LineDiv = styled.div`
  min-width: 24px;
  height: 4px;
  border-radius: 50px;
  margin: 14px 16px 16px 0;
`;

const ProjectName = styled.div`
  font-family: ${(props) => props.theme.Fonts.Quicksand};
  font-weight: 700;
  font-size: 26px;
`;

const ProjectInfo = styled.div`
  margin: 8px 0 12px;
  font-size: 14px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
`;

const Point = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
`;

const TechStack = styled.div`
  padding: 4px 12px;
  border: 1px solid ${(props) => props.theme.Colors.LightWhite};
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tech = styled.p`
  font-size: 14px;
  margin-left: 8px;
  font-family: ${(props) => props.theme.Fonts.Poppins};
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;

const ProjectDescription = forwardRef((_, ref) => {
  const [projectData, setProjectData] = useState(ProjectsData[0]);

  useImperativeHandle(ref, () => ({
    updateProject: (newProject) => {
      setProjectData(newProject);
    },
  }));

  if (!projectData) {
    return <ProjectDetails>No project selected</ProjectDetails>;
  }
  return (
    <ProjectDetails>
      <LineDiv style={{backgroundColor: projectData.color}}/>
      <div>
        <FlexDiv>
          <ProjectName>{projectData.name}</ProjectName>
          {projectData.github && (
            <a
              href={projectData.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" />
            </a>
          )}
        </FlexDiv>

        <ProjectInfo>{projectData.info}</ProjectInfo>

        {projectData.points?.map((point, index) => (
          <FlexDiv key={index}>
            <Icon name="asterisk" size="xs" style={{margin: "5px 0 0"}} />
            <Point>{point}</Point>
          </FlexDiv>
        ))}

        <FlexDiv style={{ marginTop: "12px", flexWrap: "wrap" }}>
          {projectData.techStack?.map((tech, i) => (
            <TechStack key={i}>
              <img
                src={`https://cdn.simpleicons.org/${tech}`}
                alt={tech}
                width="16"
              />
              <Tech>{tech}</Tech>
            </TechStack>
          ))}
        </FlexDiv>
      </div>
    </ProjectDetails>
  );
});

export default ProjectDescription;
