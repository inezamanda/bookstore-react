import React from 'react'
import { Card, Row , Button, Col, ButtonGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './BookComponent.css'

const BookComponent = ({bookId, title, description, path, price, purchaseAmount, image, handleDelete }) => {
    return (
        <>
            <Col lg={3} md={6}>
                <Card className="book-card mb-3">
                    <Card.Img variant="top" className="book-img" src={image}/>
                    <Card.Body className="book-body">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <div className="d-flex justify-content-between align-items-center">
                        <ButtonGroup aria-label="Basic Example">
                            <Link to={`${path}/${bookId}`} className="btn btn-sm btn-outline-secondary">Detail</Link>
                            <Link to={`${path}/edit/${bookId}`} className="btn btn-sm btn-outline-warning">Update</Link>
                            {
                                purchaseAmount > 0 || purchaseAmount === null ? 
                                <button onClick={() =>handleDelete(bookId)} className="btn btn-sm btn-outline-danger" disabled={true}>
                                    Delete
                                </button> :
                                <button onClick={() =>handleDelete(bookId)} className="btn btn-sm btn-outline-danger">
                                    Delete
                                </button> 
                            }
                        </ButtonGroup>
                        <small className="text-muted">Rp. {price}</small>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default BookComponent;