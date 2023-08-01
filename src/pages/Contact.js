import React from "react";
import "./Contact.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Contacting...");
    const formData = new FormData(event.target);

    formData.append("access_key", "bfcb8c2b-ca22-4e53-ac02-9e4703c528e1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data) {
      console.log("Success", data);
      setResult("Success!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      console.log("Error", data);
      setResult("Something went wrong, please try again!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };

  return (
    <>
      <Container>
        <div className="contact-page">
          <h4 className="contact-welcome">
            Feel free to reach out using the following form!
          </h4>
        </div>
        <Form onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              I will never share your email with anyone else!
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="message"
              type="message"
              placeholder="Enter your message"
              required
            />
            <Form.Text className="text-muted">
              Please let me know your name and what company you're reaching out
              on behalf of!
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Confirm" />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
        <span className="contact-message">{result}</span>
      </Container>
    </>
  );
}

export default ContactForm;
