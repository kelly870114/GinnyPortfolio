import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCardFR from "./ProjectCard_FR";
import ProjectCardHIS from "./ProjectCard_HIS";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="green">Projects </strong>
        </h1>
        <p className="yellow">
          Here are a few projects I've worked before.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCardFR/>
          </Col>
          <Col md={4} className="project-card">
            <ProjectCardHIS/>
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
