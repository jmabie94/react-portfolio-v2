import React from "react";
import "./Contact.css";

import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        }).then((response = response.json()));

        if (response.success) {
            console.log("Success", response);
            setResult(response.message);
        } else {
            console.log("Error", response);
            setResult(response.message);
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
                        <Form.Label>
                            Email address
                        </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            I will never share your email with anyone else!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMessage">
                        <Form.Label>
                            Message
                        </Form.Label>
                        <Form.Control type="message" placeholder="Enter your message" />
                        <Form.Text className="text-muted">
                            Please let me know your name and what company you're reaching out on behalf of!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Confirm" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className="contact-message">
                    <span>
                        {result}
                    </span>
                </div>
            </Container>
        </>
    );
};

export default ContactForm;
