import React from "react";
import {
  FaHtml5,
  FaReact,
  FaJs,
  FaNodeJs,
  FaCss3,
  FaLaptopCode,
  FaServer,
  FaHubspot,
} from "react-icons/fa";
import { SiRedux, SiMongodb, SiNextdotjs, SiTypescript   } from "react-icons/si";
import {
  SkillsContainer,
  Col,
  Colb,
  BoxDiv,
  SkillBox,
  SkillBoxText,
  Common,
} from "./Styles";
import { Container, H1 } from "../../SharedStyles/SharedStyles";

import("./skills.css");

const Skills = () => {
  const projects = [
    {
      id: 0,
      project_name: "JavaScript",
      project_desc: <FaJs className="commonIcons" />,
    },
    {
      id: 1,
      project_name: "React JS",
      project_desc: <FaReact className="commonIcons" />,
    },
    // {
    //   id: 2,
    //   project_name: "Redux",
    //   project_desc: <SiRedux className="commonIcons" />,
    // },
    {
      id: 3,
      project_name: "HTML",
      project_desc: <FaHtml5 className="commonIcons" />,
    },
    {
      id: 4,
      project_name: "CSS",
      project_desc: <FaCss3 className="commonIcons" />,
    },
    {
      id: 5,
      project_name: "Node JS",
      project_desc: <FaNodeJs className="commonIcons" />,
    },
    {
      id: 6,
      project_name: "Express",
      project_desc: <FaNodeJs className="commonIcons" />,
    },
    // {
    //   id: 7,
    //   project_name: "Mongo DB",
    //   project_desc: <SiMongodb className="commonIcons" />,
    // },
    {
      id: 8,
      project_name: "Next JS",
      project_desc: <SiNextdotjs className="commonIcons" />,
    },
    {
      id: 9,
      project_name: "Typescript",
      project_desc: <SiTypescript className="commonIcons" />,
    }
  ];
  const proficiencies = [
    {
      id: 0,
      project_name: "Frontend",
      project_desc: <FaLaptopCode className="commonIcons" />,
    },
    {
      id: 2,
      project_name: "Data Structures",
      project_desc: <FaHubspot className="commonIcons" />,
    },
    {
      id: 1,
      project_name: "Backend",
      project_desc: <FaServer className="commonIcons" />,
    },
  ];

  return (
    <Container className="skills">
      <SkillsContainer>
        <Common>
          <H1>Technologies</H1>
        </Common>
        <Col>
          {projects.map((item) => (
            <BoxDiv key={item.id}>
              <SkillBox>
                {item.project_desc}
                <SkillBoxText>{item.project_name}</SkillBoxText>
              </SkillBox>
            </BoxDiv>
          ))}
        </Col>
        <Common>
          <H1>Proficiencies</H1>
        </Common>
        <Colb>
          {proficiencies.map((item) => (
            <BoxDiv key={item.id}>
              <SkillBox>
                {item.project_desc}
                <SkillBoxText>{item.project_name}</SkillBoxText>
              </SkillBox>
            </BoxDiv>
          ))}
        </Colb>
      </SkillsContainer>
    </Container>
  );
};

export default Skills;
