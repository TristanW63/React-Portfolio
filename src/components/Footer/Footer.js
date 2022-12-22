import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiFillInstagram
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"

function Footer() {
    return (
        <Container fluid className="footer">
            <Row>
                  <Col md="4" className="footer-copywright">
          <h3>Developed by Tristan Wilson</h3>
        </Col>
                <Col md='4' className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a
                            href="https://github.com/TristanW63"
                            style={{ color: "white" }}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a 
                            href="https://www.linkedin.com/in/tristan-wilson-web-developer/"
                            style={{ color: 'white' }}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <FaLinkedinIn />
                            </a>
                        </li>
                        <li className="social-icons">
                            <a
                            href="https://www.instagram.com/_tristan63_/"
                            style={{ color: 'white' }}
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;