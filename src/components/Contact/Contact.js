import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import "./Contact.css"

function Contact() {
  return (
    <Container fluid className='form'>
        <Container>
            <h1 className='contact-heading' style={{ textAlign: "center", color: "white" }}>
                Feel free to contact me about any inquires!
            </h1>
    <Form>
      <Row>
        <Col className='names'>
          <Form.Control placeholder="First name" />
        </Col>
        <Col className='names'>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label className='formText'>Email address</Form.Label>
        <Form.Control type="email" placeholder="example@email.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className='formText'>Send me a message</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
    </Container>
    </Container>
  );
}

export default Contact;