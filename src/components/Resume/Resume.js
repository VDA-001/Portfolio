import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/VishalDA-Resume.pdf";
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
              title="Volunteer"
              date="July 2021 - Present"
              content={[
                "Working as a campus leader at Community Classroom, A community built for providing quality education.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Hackathon (Hackon 2.0)"
              content={[
                "Worked on a project which focus on validating covid related resources. It was an amazing experience to work with some amazing people and this also motivated me to attend more hackthon's.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.E [Dayanand sagar academy of technology and managment(DSATM), Bangalore]"
              date="2019 - Present"
              content={[`CGPA: 8.7 (Till 4th Sem)`]}
            />
            <Resumecontent
              title="12TH BOARD [Sri Kumaran Children Home(SKCH), Bangalore]"
              date="2017 - 2019"
              content={["Precentage: 88%"]}
            />
            <Resumecontent
              title="10TH BOARD [Ennar School, Bangalore] "
              date="2008 - 2017"
              content={["Precentage: 89%"]}
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
