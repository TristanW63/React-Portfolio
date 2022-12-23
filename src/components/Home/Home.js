import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";
import "./intro.css";
import Me from "../../img/avatar.png";
import Techstack from "./Techstack";
import AboutCard from "./AboutCard";
import {
    AiFillGithub,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";
  import Dev from "../../img/devs.png"

function Home() {
  return (
    <section className="background">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TRISTAN WILSON</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
            <div>
              <img src={Me} alt="Me" className="avatar" />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="about-section">
            <Container>
                <Row style={{ justifyContent: "center", padding: "10px" }}>
                    <Col
                    md={7}
                    style={{
                        justifyContent: "center",
                        paddingTop: "30px",
                        paddingBottom: "50px"
                    }}
                    >
                        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                            About <strong className="blue">Me</strong>
                        </h1>
                        <AboutCard />
                    </Col>
                    <Col
                    md={5}
                    style={{ paddingTop: "120px", paddingBottom: "50px" }}
                    className="about-img"
                    >
                      <img src={Dev} alt="Me" className="devDesk" />
                    </Col>
                </Row>
                <h1 className="project-heading">
                    <strong className="blue">Skillset</strong>
                </h1>
                <Techstack />
                {/* github commit calender */}
                <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND <span className="blue">ME</span> ON</h1>
              <p>
                <span className="blue">Feel</span> free to <span className="blue">connect </span>with <span className="blue">me</span>
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/TristanW63"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/tristan-wilson-web-developer/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/_tristan63_/"
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
    </section>
  );
}

export default Home;
