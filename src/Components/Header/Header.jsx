import React from "react";
import { HeaderContent, H1, P, A, HeaderButtons, TypeWriterH1 } from "./Styles";
import { Container } from "../../SharedStyles/SharedStyles";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <Container className="home">
      <HeaderContent>
        <div>
          <H1>Hi 👋 I'm Rounak Mojumder</H1>
          <TypeWriterH1>
            <Typewriter
              options={{
                strings: [
                  "I Love Coding",
                  "I am a Problem Solver",
                  "I am a Full Stack web Developer",
                ],
                pauseFor: 100,
                autoStart: true,
                loop: true,
              }}
            />
            
          </TypeWriterH1>
          <P>
            An enthusiastic Full Stack Web Developer with a strong set of
            technical as well as non-technical skills and a dedication towards
            creating useful and interactive web applications.
          </P>
          <HeaderButtons>
            <A
              target="_blank"
              // rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1Rq2fWLKZ4HJBj4ljnZy0jjrGhNvox0em/view"
            >
              Resume
            </A>
            
            &nbsp;&nbsp;&nbsp;
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={100}
            >
              <A>Projects</A>
            </Link>
          </HeaderButtons>
        </div>
      </HeaderContent>
    </Container>
  );
};

export default Banner;
