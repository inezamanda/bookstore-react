import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const BookForm = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newBook = {
      id: Math.floor(Math.random() * 100) + 1,
      title: title,
      description: description,
      image: image
    }
    props.onCreateBook(newBook);
    setTitle('')
    setDescription('')
    setImage('')
  }

  return (
    <div>
      <h3>Book Form Component</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text"
            placeholder="Enter book title"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter book description"
            name="description"
            value={description}
            onChange={e => setDescription(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text" 
            placeholder="Enter image url"
            name="image"
            value={image}
            onChange={e => setImage(e.target.value)} />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          disabled={!title, !description, !image} >
            Save
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;