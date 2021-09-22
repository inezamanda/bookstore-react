import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap';
import BookForm from './BookForm';
import BookList from './BookList';

const Book = () => {
    const [getBook, setBook] = useState([
        {
            id: 1,
            title: 'Asesmen Pembelajaran Berbasis Komputer Dan Android',
            description: 'Implementasi Teknologi Informasi dan Komunikasi (TIK) pada lembaga pendidikan saat ini sudah menjadi keharusan, karena penerapan TIK dapat menjadi salah satu indikator keberhasilan suatu institusi pendidikan. Tidak sedikit dosen yang memanfaatkan kemajuan teknologi tersebut.',
            image: 'https://cdn.gramedia.com/uploads/items/Asesmen_Pembelajaran_Berbasis_Komputer_dan_Android.jpg'
        },
    ]);

    const eventCreateBook = (book) => {
        setBook(getBook.concat(book))
        console.log(getBook)
    }

    return (
        <Container>
            <Row>
                <BookForm onCreateBook = { eventCreateBook }/>
            </Row>
            <Row>
                <BookList dataBook = { getBook }/>
            </Row>
        </Container>
    )
}

export default Book;
