import React from "react";
import { FaNodeJs } from "react-icons/fa";

import {
  ProjectDiv,
  Row,
  ServiceBox,
  ServiceBoxHeader,
  ServiceBoxP,
  A,
  BoxDiv,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
//import { AiFillGithub } from "react-icons/ai";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiHeroku } from "react-icons/si";
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const projects = [
    {
      id: 1,
      project_name: "AdRENTure",
      image: "https://i.ibb.co/CmwkX83/Home-2.png",
      project_desc:
        "This is a full stack project, I have worked in both frontend and backend. It is a car renting website, where you can hire cars for few hours or few days with or without driver. This is a solo project and I learned a lot of new things while creating this project.",
      deploy_link: "https://adrenture.vercel.app/",
      repo_link: "https://github.com/Rounak1234567/AdRENTure-frontend",
      tech_stack: [
        <FaReact />,
        <FaNodeJs />,
        <SiMongodb />,
        <SiHeroku />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
      video_link:"https://drive.google.com/file/d/1cnyFc6laHOwIodlSkoGl5I25vo3vKcTo/view?usp=sharing",
    },
    {
      id: 3,
      project_name: "Dunzo Clone",
      image: "https://i.ibb.co/cb8vPNr/Screenshot-83.png",
      project_desc:
        "This is a group project which we completed the entire frontend in a span of 5 days then we worked on the backend and completed that in another 5 days. Here we have trided to clone the Dunzo website. The UI looks almost simillar to the original website",
      deploy_link: "https://awesome-booth-917140.netlify.app/",
      repo_link: "https://github.com/Rounak1234567/Dunzo",
      tech_stack: [
        
        <FaNodeJs />,
        <SiMongodb />,
        <FaJs />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
      video_link:"https://drive.google.com/file/d/1Ry3GD6iD1pGSGH_2msJDNMPoBj2R1pVh/view?usp=sharing",
    },

    {
      id: 2,
      project_name: "Tic Tac Toe",
      image:
        "https://i.ibb.co/g3R0dVf/Screenshot-82.png",
      project_desc:
        "This is a react implementation of the famous Tic Tac Toe game. It can be played by 2 players X and O, whoever gets 3 consecutive X or O wins the game. This is a sole project where I got clear concept about the different hooks in React.",
      deploy_link: "https://tic-tac-toe-by-rounak.netlify.app/",
      repo_link: "https://github.com/Rounak1234567/Tic-Tac-Toe-game",
      tech_stack: [
        <FaReact />,
    
      
        <FaJs />,
        
        <FaHtml5 />,
        <FaCss3 />,
      ],
      video_link:"https://drive.google.com/file/d/1GXBpg_wQ0hzulMgOJ15fzYzvTS1OWD0n/view?usp=sharing"
    },
  ];

  return (
    <Container className="projects">
      <ProjectDiv>
        <Common>
          <H1>Projects</H1>
        </Common>
        <Row>
          {projects.map((item) => (
            <BoxDiv key={uuidv4()}>
              <ServiceBox>
                <img
                  src={item.image}
                  alt="icon"
                  style={{ width: "100%", height: "250px" }}
                />
                <div style={{ margin: "25px" }}>
                  <ServiceBoxHeader style={{ textAlign: "center" }}>
                    {item.project_name}
                  </ServiceBoxHeader>
                  <ServiceBoxP>{item.project_desc}</ServiceBoxP>
                  {/* <a href="">Read more</a> */}
                  <div
                    style={{
                      margin: "20px",
                      display: "flex",

                      justifyContent: "space-between",
                    }}
                  >
                    {item.tech_stack.map((item) => (
                      <div key={uuidv4()} className="iconsTechStack">
                        {item}
                      </div>
                    ))}
                  </div>
                  <A
                    href={item.repo_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <FaGithub size={"50px"}/> Code */}
                    {/* <button className="pro_btn">Code</button> */}
                    Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <FaLink /> Demo */}
                    {/* <button className="pro_btn">Link</button> */}
                    Link
                  </A>
                  <A
                    href={item.video_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* <FaLink /> Demo */}
                    {/* <button className="pro_btn">Video</button> */}
                    Video
                  </A>
                </div>
              </ServiceBox>
            </BoxDiv>
          ))}
        </Row>
      </ProjectDiv>
    </Container>
  );
};

export default Projects;
