import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="green"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm currently a master student in the 
              <b className="home-about-body-green"> Computer Science </b>
              department at 
              <b className="home-about-body-green"> University of California, Davis. </b>
              <br />
              <br />
              My field of Interest's are
              <b> Full Stack Development </b> and
                areas related to{" "}
              <b>
                Cloud Computing.
              </b>
              <br />
              Therefore, I had experineces in
              <b className="home-about-body-green"> Java, React.js, Python and C#. </b>
              Moreover, I received the <b className="home-about-body-green"> AWS SAA </b>
              (Solution Architect Associate)
              and <b className="home-about-body-green"> Azure AZ900 </b> certifications.
              <br />
              
              <br />
              With the passion for developing, I kept my curiosity alive and started to join several projects 
              and worked at<b className="home-about-body-green"> Microsoft</b> as a Software Engineer Intern for a year. 
              In this role, I joined a Hospital Information System project and used C#, Knockout.js 
              to contribute several features that can help update hospital's system from COBOL into Web System 
              and improve its efficiency. 
              <br />
              <br />
              Besides internship experience, I had a year of experience as a System Analyst at 
              <b className="home-about-body-green"> IBM </b>
              and participated in 3 banking projects which are all in an agile environment.
              I applied technical knowledge and design thinking to analyze and translate the requirements 
              into feasible solutions. In this role, I gained great problem-solving skills 
              and was able to understand customers requirements.
              



              <br />
              <br />
              I'm not only passionate about software developing, but also love to do  <b className="home-about-body-green"> UI designing </b> 
              and draw some illustrations. 
              In several projects I joined, I was responsible for both UI designing and software developing.
              I love to give products vitality and personality, so that the users can enjoy 
              using it.
              If you feel like having a chat, please feel free to contact me.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="green">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
