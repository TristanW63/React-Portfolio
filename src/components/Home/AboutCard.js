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
            eager to join a creative, problem solving team. I am confident in my
            ability to learn and implement new technologies quickly. Below you
            will find the languages and frameworks I am most familiar with.
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
