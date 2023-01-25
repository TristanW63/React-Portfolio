import React, { useState } from "react";
import { useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
import "./Contact.css";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";

export const Contact = () => {
  const [validated, setValidated] = useState(false);
  const form = useRef();
  const [isShown, setIsShown] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bfhptij",
        "template_1k2bvfq",
        form.current,
        "UR0sZEoJeEjv8ccYw"
      )
      .then(
        () => {
          setIsShown((current) => !current);
          setValidated(false);
          e.target.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      sendEmail(event);
    }
    setValidated(true);
  };

  return (
    <Container fluid className="form">
      <Container className="text-center d-block">
        <h1
          className="contact-heading"
          style={{ textAlign: "center", color: "white" }}
        >
          Feel free to <strong className="blue">Contact Me</strong> with any
          inquires!
        </h1>
        <a
          style={{ fontSize: "2rem", textDecoration: "none" }}
          href="mailto:tristanawilson63@gmail.com"
          target="_blank"
        >
          <span style={{ color: "white" }}>Email Me</span>{" "}
          <span className="blue">Here</span>
          <AiOutlineMail
            style={{ color: "white", marginLeft: "5px", marginBottom: "2px" }}
          />
        </a>
        <p style={{ display: isShown ? "block" : "none" }} id="messageDisplay">
          Message <strong className="blue">Successfully</strong> sent!
        </p>
        <Form
          noValidate
          validated={validated}
          ref={form}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label
                className="blue"
                id="formNames"
                style={{ paddingTop: "10px" }}
              >
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="first_name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className="blue" style={{ paddingTop: "10px" }}>
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="last_name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please input name
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationEmail">
              <Form.Label className="blue" style={{ paddingTop: "10px" }}>
                Email
              </Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="example@email.com"
                  aria-describedby="inputGroupPrepend"
                  name="user_email"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please input valid email.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Label className="blue" style={{ paddingTop: "10px" }}>
                Message
              </Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Message"
                  aria-describedby="inputGroupPrepend"
                  name="message"
                  required
                />
              </InputGroup>
            </Form.Group>
          </Row>
          <Button type="submit" value="Send" id="contact-btn">
            Submit form
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default Contact;
