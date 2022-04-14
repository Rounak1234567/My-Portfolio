import React from "react";
import { FaGithub, FaLink, FaNodeJs } from "react-icons/fa";

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
import { AiFillGithub } from "react-icons/ai";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiMongodb, SiNodeDotJs, SiRedux, SiHeroku } from "react-icons/si";
// import { SiExpress, SiMaterialui } from 'react-icons/si/SiExpress';

import { v4 as uuidv4 } from "uuid";

const Projects = () => {
  const projects = [
    {
      id: 1,
      project_name: "Apollo247 Clone",
      image: "https://www.linkpicture.com/q/apollo247.png",
      project_desc:
        "Apollo247 is a complete healthcare site. It provides all medical facilites such as book an appointment with the doctor, book lab test, order medicines, and reading articles and blogs related to health and fitness. Added data using JSON server, and stored it using local storage. Implemented add to cart functionality in order to buy medicine. User can delete medicine from the cart.",
      deploy_link: "https://apolloclone.netlify.app/",
      repo_link: "https://github.com/Rajan1397/Apollo_clone",
      tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
    },
    {
      id: 3,
      project_name: "Amazon Prime Videos",
      image: "https://www.linkpicture.com/q/primeVideos.png",
      project_desc:
        "Prime Videos is an American subscription video on demand platform. We have use TMDB API to fetch all the data, and populate it dynamcially on the screen. Implemented signin, login, dynamcially popup of movies in different categories, can see trailer and movie video if available in the database within the app.",
      deploy_link: "https://amazonprime-clone.netlify.app/",
      repo_link: "https://github.com/Rajan1397/movie_app",
      tech_stack: [
        <FaReact />,
        <FaNodeJs />,
        <SiMongodb />,
        <FaJs />,
        <SiHeroku />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
    },

    {
      id: 2,
      project_name: "Movie-App",
      image:
        "https://github.com/aadityaneve/Portfolio/blob/master/public/ProjectImages/movie-app.png?raw=true",
      project_desc:
        "A Movie platform that allows users to search and watch trailers of a wide variety of movies. This is a personal project. Implemented signin, login, dynamcially popup of movies in different categories, can see trailer and movie video if available in the database within the app. This is a complete MERN APP with both frontend and backend application.",
      deploy_link: "https://github.com/Rajan1397/movie_app",
      repo_link: "https://github.com/Rajan1397/movie_app",
      tech_stack: [
        <FaReact />,
        <FaNodeJs />,
        <SiMongodb />,
        <FaJs />,
        <SiHeroku />,
        <FaHtml5 />,
        <FaCss3 />,
      ],
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
                    <FaGithub /> Code
                  </A>
                  <A
                    href={item.deploy_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink /> Demo
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
