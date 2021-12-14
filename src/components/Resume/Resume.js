import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Himanshu_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Front End Developer [ Pataran Technologies, Chandigarh ]"
              date="Jan 2021 - July 2021"
              content={[
                "worked with advanced web devlopment technologies like React.js, EcmaScript 6, JavaScript, Bootstrap 4, CSS3, HTML5 and JQuery.",
                "Developed web apps and responsive User Interface using Bootstrap and React libraries like React Router and Material UI.",
                "worked in developing CI/CD pipelines for code deployment using Git Pages, Netlify and Heroku.",
                "worked with senior development engineers to test product features and functions and validate corrected problem reports."
              ]}
            />
            <Resumecontent
              title="Software Engineer Intern  [ Sunesto Web Pvt Ltd, Greater Noida ]"
              date="May 2020 - Nov 2020"
              content={[
                "Worked collaboratively in providing resources and processes to empower to rapidly build and operations applications and infrastructure.",
                "Redesigned company website and created features to enhance the user experience and optimized designs for smartphones.",
                "worked in a team-oriented environment for all aspects of product devlopment (design, implementation, test and support).",
              ]}
            />

            <h3 className="resume-title">Hobbies and Interests</h3>
            <Resumecontent
              title=""
              content={[
                "I prefer to help old and poor peoples.",
                "I would love to travel and work around the globe.",
                "In my free time, I prefer to work as a local guide on google map.",
                "Utilizing time by engaging myself in different co-curricular activities.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="GNIOT _ B-Tech - [Delhi(NCR), Greater Noida] "
              date="2018 - Passout"
              content={[
                "Graduated under Computer Science Engineering",
                "B.Tech : 61%",
                "Intermediate : 64%",
                "Matriculation : 81%"
              ]}
            />

            <h3 className="resume-title">Certification and Awards</h3>
            <Resumecontent
              title=""
              content={[
                " Awarded as a Senior Coordinator of Campus Social club & Technical Club.",
                " Certificate of awarded to completion of java devlopment course from JSpiders Institute Bangalore.",
                " Certificate of awarded to completion of JavaScript Algorithm and Data Structures from freeCodeCamp.org.",
                " Certificate earned from HackerRank for successfully completion of assessment test of Java, JavaScript, ReactJS & SQL."
              ]}
            />

            <h3 className="resume-title">Personal Strength</h3>
            <Resumecontent
              title=""
              content={[
                "  Good attitude and positive thinking.",
                "  Ability to cope up with different situations.",
                "  Quick learner of new things, hardworking and enthusiastic.",
                "  If any of tasks assigned, would like to take responsibility as an initiative.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
