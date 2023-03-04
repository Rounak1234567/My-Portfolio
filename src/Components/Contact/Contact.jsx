import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

import {
  ContactContainer,
  ContactForm,
  InputInput1,
  InputInput2,
  A,
  Column,
  P,
  LinksCont,
} from "./Styles";
import { Container, Common, H1 } from "../../SharedStyles/SharedStyles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaLocationArrow,
} from "react-icons/fa";

import { SiGmail } from "react-icons/si";
import { v4 as uuidv4 } from "uuid";

const footerData = [
  {
    id: 0,
    title: "Mobile",
    display: "+91 9832174604",
    link: "tel:+919832174604",
    icon: <FaPhone style={{ color: "grey" }} className="commonIconsFooter" />,
  },
  {
    id: 1,
    title: "Email",
    display: "riz.moj.msd97@gmail.com",
    link: "mailto:riz.moj.msd97@gmail.com",
    icon: <SiGmail style={{ color: "grey" }} className="commonIconsFooter" />,
  },
  {
    id: 2,
    title: "Github",
    display: "Github",
    link: "https://github.com/Rounak1234567",
    icon: <FaGithub style={{ color: "grey" }} className="commonIconsFooter" />,
  },
  {
    id: 3,
    title: "LinkedIn",
    display: "LinkedIn",
    link: "https://www.linkedin.com/in/rounak-mojumder/",
    icon: (
      <FaLinkedin style={{ color: "grey" }} className="commonIconsFooter" />
    ),
  },
  {
    id: 4,
    title: "Twitter",
    display: "Twitter",
    link: "https://twitter.com/mojumder_rounak",
    icon: <FaTwitter style={{ color: "grey" }} className="commonIconsFooter" />,
  },
  {
    id: 5,
    title: "Location",
    display: "Durgapur, West Bengal",

    icon: (
      <FaLocationArrow
        style={{ color: "grey" }}
        className="commonIconsFooter"
      />
    ),
  },
];

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);
  const form = useRef();

  const handleSend = async (e) => {
    e.preventDefault();

    const { name, subject, email, message } = e.target;

    console.log(name.value, email.value)

    emailjs
      .send(
        "service_fhvseid",
        "template_n0khwwl",
        {
          name: name.value,
          email: email.value,
          subject: subject.value,
          message: message.value,
        },
        "PdDo_5XQNWis1y9j7"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          setEmailSent(true);

          if (!emailSent) {
            setInterval(() => {
              setEmailSent(false);
            }, 5000);
          }
        },
        function (err) {
          console.log("FAILED...", err);
        }
      );

    e.target.reset();
  };

  //1E59BD3DADAE8A518C491269F93221C3674B6C0F93DC25E5BFA99AA76A8AE12972099A01148B7BDF729BD8341701FD7B

  //mojumderrounak97@gmail.com
  //81DBDA3CB07379FDF74AF93CACB1E06CAA34
  //smtp.elasticemail.com
  //2525

  //ebd2a9dc-bc03-4e53-b2ed-4f9f7f70d768
  return (
    <Container className="contact">
      <Common>
        <H1>Contact</H1>
      </Common>
      <ContactContainer>
        <Column>
          <ContactForm ref={form} onSubmit={handleSend}>
            <InputInput1 required name="name" type="text" placeholder="Name" />
            <InputInput1
              required
              name="email"
              type="email"
              placeholder="Email"
            />
            <InputInput1
              required
              name="subject"
              type="text"
              placeholder="Subject"
            />
            <InputInput2
              required
              name="message"
              placeholder="Drop your message here"
            ></InputInput2>
            <A value="Send" style={{ color: emailSent ? "#FFD479" : "white" }}>
              {emailSent ? "E-MAIL SENT" : "SEND E-MAIL"}
            </A>
            <ToastContainer />
          </ContactForm>
        </Column>
        <Column>
          <LinksCont>
            {footerData.map((item) => (
              <div
                key={uuidv4()}
                title={item.title}
                style={{ display: "flex" }}
              >
                <div>
                  {/* <a target="_blank" rel="noreferrer" href={item.link}  style={{textDecoration:"none"}}> */}
                  {item.icon}
                  {/* </a> */}
                </div>
                <div style={{ marginTop: "-5px" }}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.link}
                    style={{ textDecoration: "none" }}
                  >
                    <P>{item.display}</P>
                  </a>
                </div>
              </div>
            ))}
          </LinksCont>
        </Column>
      </ContactContainer>
    </Container>
  );
};

export default Contact;
