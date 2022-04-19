import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
//import { SiLeetcode } from "react-icons/si";
import {
  AboutDiv,
  Column,
  Img,
  AboutInfo,
  AboutInfoP,
  HeaderUl,
  HeaderLi,
  JelloHori,
} from "./Styles";

import { Container, H1 } from "../../SharedStyles/SharedStyles";
const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/rounak-mojumder/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/Rounak1234567",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://twitter.com/mojumder_rounak",
    icon: <FaTwitter />,
  },
];
const About = () => {
  return (
    <Container className="about">
      <AboutDiv>
        <Column>
          <Img src="https://media-exp1.licdn.com/dms/image/C4E03AQEmiiOQbRZ76w/profile-displayphoto-shrink_800_800/0/1627845032818?e=1651104000&v=beta&t=gTm874dQaFnUvS5qfAAZDDZl55G3O22gZU4LgPJ3_-Y" alt="my image" />
        </Column>
        <Column>
          <H1>About</H1>
          <AboutInfo>
            <AboutInfoP>
              Rounak Mojumder, a dedicated Full Stack Web developer based in West Bengal,
              with a specialized skill set that enables me to build robust web
              applications. I am adept in both front-end and back-end and have
              an eye for performance and accuracy.
            </AboutInfoP>
            <AboutInfoP>
              I am adaptable, proficient in remote collaboration, and committed
              to achieving organizational goals. With a knack for
              problem-solving and analytics, I am passionate about solving
              Algorithmic problems with a good hold on Data Structures.
            </AboutInfoP>
          </AboutInfo>
          <HeaderUl>
            {socialMediaLinks.map((item) => (
              <JelloHori key={item.id}>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <HeaderLi>{item.icon}</HeaderLi>
                </a>
              </JelloHori>
            ))}
          </HeaderUl>
        </Column>
      </AboutDiv>
    </Container>
  );
};

export default About;
