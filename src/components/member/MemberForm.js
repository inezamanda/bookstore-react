import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const MemberForm = (props) => {
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newMember = {
      id: Math.floor(Math.random() * 100) + 1,
      firstname: firstname,
      lastname: lastname,
      username: username,
      email: email
    }

    props.onCreateMember(newMember);
    setFirstName('')
    setLastName('')
    setUsername('')
    setEmail('')
  }

  return (
    <div>
      <h3>Member Form Component</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter first name"
            name="firstname"
            value={firstname}
            onChange={e => setFirstName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            name="lastname"
            value={lastname}
            onChange={e => setLastName(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text" 
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text" 
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          disabled={!firstname, !lastname, !username, !email} >
            Save
        </Button>
      </Form>
    </div>
  );
};

export default MemberForm;