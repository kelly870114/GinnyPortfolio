import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Handsonstack from "./Handsonstack";
import Timeline from "./Timeline";
import EducationCard_UCDavis from "./EducationCard_UCDavis";
import EducationCard_FJU from "./EducationCard_FJU";
import CertificationCard_AWS from "./CertificateCard_AWS";
import CertificationCard_Azure from "./CertificateCard_Azure";

function About() {
  return (
    <Container fluid className="about-section">
      
      <Container>
        
        <h1>About <strong className="yellow">'ME'</strong></h1>
        <br/>
        <h1 className="project-heading" style={{alignItems: 'left'}}>
          Education / Certificates
        </h1>
        <br/>
        
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={10} md={3}>
            <EducationCard_UCDavis/>
          </Col>
          <Col xs={10} md={3}>
            <EducationCard_FJU/>
          </Col>
          <Col xs={10} md={3}>
            <CertificationCard_AWS/>
          </Col>
          <Col xs={10} md={3}>
            <CertificationCard_Azure/>
          </Col>
        </Row>
        

        <h1 className="project-heading" >
          Hands-on Experiences
        </h1>
        <br/>
        <Handsonstack />
        {/* <Toolstack /> */}
        
        {/* <Github /> */}
        <h1 className="project-heading" >
          Working Experiences
        </h1>
        <br/>
        <Timeline />
      </Container>
    </Container>
  );
}

export default About;
