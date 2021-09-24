import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

const MemberForm = () => {

  return (
      <Row>
        <Col>
          <h3>Member Form Component</h3>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Enter first name"
                name="firstname"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                name="lastname"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter username"
                name="username"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter email"
                name="email"/>
            </Form.Group>

            <Button
              variant="success"
              type="submit">
                Save
            </Button>
          </Form>
        </Col>
      </Row>
  );
};

export default MemberForm;