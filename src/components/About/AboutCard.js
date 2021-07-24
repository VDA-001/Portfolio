import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey Everyone, I am <span className="purple">Vishal D A </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            I'm a 2nd year student pursuing my bachelor's degree in Information
            science from DSATM. I am a full stack developer and a passionate
            learner who's always willing to learn and work across new
            technologies and domains .
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Touch Typing (Speed - 85WPM)
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Dancing (Have given 70+ stage shows and have won
              state level competition thrice)
            </li>
            <br />
            <li className="about-activity">
              <ImPointRight /> Sports (Cricket, Throwball, Long jump)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
