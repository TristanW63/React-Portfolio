import React from "react";
import Card  from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./Project.css"

function ProjectCards(props) {
    return (
        <Card className="project-card-veiw" id="project-card-veiw">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                <Button variant="success" href={props.ghLink} target="_blank">
                    <BsGithub /> &nbsp;
                    {"Github"}
                </Button>
                {"\n"}
                {"\n"}
                    <Button
                    variant="success"
                    href={props.demoLink}
                    target="_blank"
                    style={{ marginLeft: "10px" }}
                    >
                        <CgWebsite /> &nbsp;
                        {"Demo"}
                    </Button>
            </Card.Body>
        </Card>
    )
}

export default ProjectCards;