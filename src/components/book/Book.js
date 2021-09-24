import React, { useState } from 'react'
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookForm from './BookForm';
import BookList from './BookList';

const Book = ({ match }) => {

    const {path} = match
    return (
        // <Container>
        //     <Row className="mt-5">
        //         <BookList dataBook = { getBook }/>
        //     </Row>
        // </Container>
        <div>

        </div>
    )
}

export default Book;
