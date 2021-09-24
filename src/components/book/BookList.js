import { Card, Container, Row, Button } from "react-bootstrap";
import BookComponent from "./BookComponent";
import { books } from "../../api/BookApi";
import { Link } from "react-router-dom";
import { useState } from "react";

const BookList = () => {
    
    const [books, setBook] = useState([
        {
            id: 1,
            title: 'Asesmen Pembelajaran Berbasis Komputer Dan Android',
            description: 'Implementasi Teknologi Informasi dan Komunikasi (TIK) pada lembaga pendidikan saat ini sudah menjadi keharusan, karena penerapan TIK dapat menjadi salah satu indikator keberhasilan suatu institusi pendidikan. Tidak sedikit dosen yang memanfaatkan kemajuan teknologi tersebut.',
            year: 2020,
            pages: 200,
            language: 'Indonesia',
            publisher: 'Gramedia',
            price: 70000,
            stock: 100
        },
    ]);

    return (
      <>
        <h3>Book Page</h3>
          <Link to="/books/add" className="btn btn-sm btn-success mb-3 text-uppercase">Add Book</Link>
        <Row>
          {
            books.map((book) =>  (
              <BookComponent 
                key={book.id}
                bookId={book.id}
                title={book.title}
                description={book.description} 
                year={book.year}
                pages={book.pages}
                language={book.language}
                publisher={book.publisher}
                price={book.price}
                stock={book.stock}
                variant={"primary"} 
              />)
            )
          }
          {
            books && !books.length && <h4>No book display</h4>
          }
        </Row>
      </>
    );
};

export default BookList;