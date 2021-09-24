import { useState } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bookSchema } from '../../validations/validationSchema'

const BookForm = () => {

  // object destructuring
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(bookSchema)
  });

  const submitForm = (data) => {
    console.log(data);
  }

  return (
      <Row>
        <Col>
          <h3>Book Form Component</h3>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text"
                placeholder="Enter book title"
                name="title"
                {...register("title")} 
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.tile?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textArea"
                rows={3}
                placeholder="Enter book description"
                name="description"
                {...register("title")} 
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.description?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter publish year"
                name="year"
                {...register("title")} 
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.year?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPages">
              <Form.Label>Pages</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter book pages"
                name="pages"
                {...register("title")} 
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.pages?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLanguage">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter book language"
                name="language"
                {...register("title")} 
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.language?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPublisher">
              <Form.Label>Publisher</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter publisher"
                name="publisher"
                {...register("title")} 
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.publisher?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter book price"
                name="price"
                {...register("title")} 
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.price?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter book stock"
                name="stock"
                {...register("title")} 
                className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.stock?.message}</div>
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

export default BookForm;