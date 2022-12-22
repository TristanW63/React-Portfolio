import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
    return (
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
                        {/* about card secton */}
                    </Col>
                    <Col
                    md={5}
                    style={{ paddingTop: "120px", paddingBottom: "50px" }}
                    className="about-img"
                    >
                        {/* about image */}
                    </Col>
                </Row>
                <h1 className="project-heading">
                    <strong className="blue">Skillset</strong>
                </h1>
                {/* tech stack icons */}
                {/* github commit calender */}
            </Container>
        </Container>
    )
}

export default About;