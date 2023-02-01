import React from "react";
import { Card } from "react-bootstrap";
import dev from "../../img/devDesk.png";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-veiw" id="quote-card-veiw">
      <Card.Body className="background">
        <blockquote className="blockquote md-0">
          <p>
            Hi all, I am <span className="blue">Tristan Wilson </span>
            from <span className="blue">Nashville, TN. </span>
            <br /> I am a <span className="blue">
              Full stack web developer
            </span>{" "}
            eager to bring my skills and passion for web development to a
            creative and problem-solving team. Throughout my studies and
            projects, I have developed a solid understanding of how to build
            dynamic and scalable web applications.
            <br />
            <br />
            Apart from coding, here are some other activites that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning random things
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
