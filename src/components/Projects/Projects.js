import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import Blog from "../../Assets/Projects/Blog.png";
import Chat from "../../Assets/Projects/Chat.png";
import coSource from "../../Assets/Projects/coSource.png";
import ecom from "../../Assets/Projects/ecom.jpg";
import photostall from "../../Assets/Projects/photostall.png";
import weatherapp from "../../Assets/Projects/weatherapp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blogger's Platform"
              description="A blogger's platform with basic CRUD(Create,Read,Update,Delete) functionality built using Django, Reactjs, Postgresql, Django REST framework, Bootstrap. Supports authentication, Dark theme, Categories, User Profile, Add/Read comments"
              link="https://github.com/VDA-001/blog-django-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecom}
              isBlog={false}
              title="Ecom"
              description="Ecommerce website to share clothing built using Reactjs, Django, Django REST framework, Bootstrap, Braintree(Payment gateway) .It has functionalities such as Payment gateway, Cart, Buy, authentication."
              link="https://github.com/VDA-001/Ecom"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={photostall}
              isBlog={false}
              title="Photostall"
              description="Photostall is a website used to view or upload the best photographs you have taken. This project was done for photographer's to upload or view other's photo's as well. This was built entirely using Django and Bootstrap. It has basic authentication, Profile, Download image, Categories."
              link="https://github.com/VDA-001/PhotoStall"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Chat}
              isBlog={false}
              title="Chat-App"
              description="A Real-time public chat application built using Reacjs, firebase, Bootstrap. It has Authentication with google functionality and deployed at firebase."
              link="https://github.com/VDA-001/Chat-App-React"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherapp}
              isBlog={false}
              title="Weather App React"
              description="A weather app that shows weather reading of 5 days of a particular time. Built using Reactjs as frontend, Firebase as backend and Bootstrap. This app uses OpenWeatherMap's API to get acurate discription of the weather"
              link="https://github.com/VDA-001/Weather-app-react"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coSource}
              isBlog={false}
              title="Co-Source"
              description="Co-Source is platform to get validated information about the resources of covid-19 built during a hackathon. The resources are validated by use of volunteers who get credit points in return of validating a information. This was built using reactjs and django."
              link="https://github.com/VDA-001/co_source"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
