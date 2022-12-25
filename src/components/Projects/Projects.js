import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Randamu from "../../img/Projects/Randamu2.png";
import DadJokes from "../../img/Projects/Dadjokes.png";
import Scheduler from "../../img/Projects/Scheduler.png";
import TextEditor from "../../img/Projects/TextEditor.png";
import Weather from "../../img/Projects/Weather.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          My Recent <strong className="blue">Works</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          Here are a few projects i've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DadJokes}
              title="DadJokes"
              description=""
              ghLink="https://github.com/jswearingen18/DadJokesGalore"
              demoLink="https://dadjokesgalore.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Randamu}
              title="Randamu"
              description=""
              ghLink="https://github.com/cmash93/Randamu"
              demoLink="https://cmash93.github.io/Randamu/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scheduler}
              title="Scheduler"
              description=""
              ghLink="https://github.com/TristanW63/Schedular"
              demoLink="https://tristanw63.github.io/Schedular/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextEditor}
              title="TextEditor"
              description="Text editor is a full stack web application that allows you to add text into
               the command line and it be saved in to the database. Once you close and reopen the app your
                input will be displayed again. Youre also able to down load this application to you device and use it offline."
              ghLink="https://github.com/TristanW63/textEditor"
              demoLink="https://justtexteditor.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              title="Weather App"
              description=""
              ghLink="https://github.com/TristanW63/Weather-Dashboard"
              demoLink="https://tristanw63.github.io/Weather-Dashboard/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
