import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Randamu from "../../img/Projects/Randamu2.png";
import DadJokes from "../../img/Projects/Dadjokes.png";
import Scheduler from "../../img/Projects/Scheduler.png";
import TextEditor from "../../img/Projects/TextEditor.png";
import Weather from "../../img/Projects/Weather.png";
import TheTownie from "../../img/Projects/TheTownie.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1
          className="project-heading"
          style={{ textAlign: "center", fontSize: "3rem" }}
        >
          My Recent <strong className="blue">Works</strong>
        </h1>
        <p style={{ color: "white", textAlign: "center", fontSize: "2rem" }}>
          Here are a few projects i've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TheTownie}
              title="Townie"
              description="A place to share personal thoughts and words on a public network. You are able to post, add comments and like posts. 
              Search Function allows you to search by users in the network and allows you to view all posts by that user.
              Every user can veiw their profile and edit or delete posts."
              ghLink="https://github.com/TristanW63/Townie-2.0"
              demoLink="https://townie.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={DadJokes}
              title="DadJokes"
              description="Social media platform for Dadjokes! Create an account an post a joke. you can
              also like or dislike other peoples jokes and it will be added to the database."
              ghLink="https://github.com/jswearingen18/DadJokesGalore"
              demoLink="https://dadjokesgalore.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Randamu}
              title="Randamu"
              description="Food and drink generator that displays five different food and drink recipes.
              Each recipe will display all ingredients, ingredient amounts, and cooking instructions."
              ghLink="https://github.com/cmash93/Randamu"
              demoLink="https://cmash93.github.io/Randamu/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Scheduler}
              title="Scheduler"
              description="This is a Work Day schedular to help plan your days. It will show you todays date
              and the hours for the day. Each hour is color coded for past, present and future. Keep track of your day the right way!"
              ghLink="https://github.com/TristanW63/Schedular"
              demoLink="https://tristanw63.github.io/Schedular/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TextEditor}
              title="TextEditor"
              description="Text editor is a full stack web application that allows you to add text into
               the command line and it be saved in to the database. Youre also able to down load this application 
               to you device and use it offline."
              ghLink="https://github.com/TristanW63/textEditor"
              demoLink="https://justtexteditor.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              title="Weather App"
              description="This project is to help see the weather in any location that the user searches.
               it provides current tempature, wind speed, humidity and uv index. It also provides a five days forcast"
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
