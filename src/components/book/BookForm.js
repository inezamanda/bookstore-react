import { useState, useEffect } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bookSchema } from '../../validations/validationSchema'
import { createBook, getBookById, updateBook } from "../../api/BookService";

const BookForm = ({history, match}) => {

  const {id} = match.params;
  const isAddMode = !id;
  const [book, setBook] = useState({})


  // object destructuring
  const { register, handleSubmit, reset, setValue, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(bookSchema)
  });

  const submitForm = (data) => {
    return isAddMode ? insert(data) : update(id, data)
  }

  const insert = (payload) => {
      console.log(payload);
      return createBook(payload)
      .then(response => {
        history.push('.') // books/add
      })
  }

  const update = (id, payload) => {
      return updateBook(id, payload)
      .then(response => {
        history.push('..') //books/edit/${id}
      })
  }

  useEffect(() => {
    if(!isAddMode) {
      getBookById(id)
      .then((response) => {
        let book = response.data;
        const fields = [
          'title',
          'description',
          'year',
          'pages',
          'language',
          'publisher',
          'price',
          'purchaseAmount',
          'stock'
        ];
        fields.forEach(field => setValue(field, book[field]));
        setBook(book);
      })
    }
  }, [])

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
                <div className="invalid-feedback">{errors.title?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textArea"
                rows={3}
                placeholder="Enter book description"
                name="description"
                {...register("description")} 
                className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.description?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number" 
                placeholder="Enter publish year"
                name="year"
                {...register("year")} 
                className={`form-control ${errors.year? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.year?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPages">
              <Form.Label>Pages</Form.Label>
              <Form.Control
                type="number" 
                placeholder="Enter book pages"
                name="pages"
                {...register("pages")} 
                className={`form-control ${errors.pages ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.pages?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLanguage">
              <Form.Label>Language</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter book language"
                name="language"
                {...register("language")} 
                className={`form-control ${errors.language ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.language?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPublisher">
              <Form.Label>Publisher</Form.Label>
              <Form.Control
                type="text" 
                placeholder="Enter publisher"
                name="publisher"
                {...register("publisher")} 
                className={`form-control ${errors.publisher ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.publisher?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number" 
                placeholder="Rp-,"
                name="price"
                {...register("price")} 
                className={`form-control ${errors.price ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.price?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPurchaseAmount">
              <Form.Label>Purchase Amount</Form.Label>
              <Form.Control
                type="number" 
                placeholder="Rp-,"
                name="purchaseAmount"
                {...register("purchaseAmount")} 
                className={`form-control ${errors.purchaseAmount ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.purchaseAmount?.message}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicStock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number" 
                placeholder="Enter book stock"
                name="stock"
                {...register("stock")} 
                className={`form-control ${errors.stock ? 'is-invalid' : ''}`}
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