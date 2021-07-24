import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiVisualstudiocode, SiVim, SiPostman } from "react-icons/si";
import { DiTerminalBadge } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVim />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTerminalBadge />
      </Col>
    </Row>
  );
}

export default Toolstack;
