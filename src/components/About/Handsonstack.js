import React from "react";
import { Col, Row } from "react-bootstrap";
import {TbCSharp} from "react-icons/tb";
import {
  DiJava,
  DiPython,
  DiReact,
  DiMysql,
  DiMsqlServer,
  DiGit,
  DiAndroid,
} from "react-icons/di";
import {
  SiSelenium,
  SiSpring,
  SiDotnet
} from "react-icons/si";

function Handsonstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbCSharp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMsqlServer />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAndroid />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpring />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDotnet />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSelenium />
      </Col>
    </Row>
  );
}

export default Handsonstack;
