import { Card, Container, Row, Button } from "react-bootstrap";
import BookComponent from "./BookComponent";
import { books, tempImg } from "../../api/BookApi";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getListBook, deleteBook } from "../../api/BookService";
import ModalComponent from "../modal/ModalComponent";

const BookList = ({match}) => {
  
  const { path } = match;
  const [books, setBook] = useState([]);
  const [modalShow, setModalShow] = useState({
    show: false, 
    id: null
  })

  // panggil service 
  useEffect(() => {
    loadData();
  }, [])

  const loadData = () => {
    getListBook()
    .then((response) => {
      setBook(response.data)
    })
  }
  
  const handleDelete = (id) => {
    setModalShow({
      show: true,
      id
    })
  }
  
  const handleDeleteTrue = () => {
    if(modalShow.show && modalShow.id) {
      bookDelete(modalShow.id)
      setModalShow({
        show: false,
        id: null
      })
    }
  }
  
  const bookDelete = (id) => {
    return deleteBook(id)
    .then(response => {
      loadData();
    })
  }
  
  return (
    <>
      <h3>Book Page</h3>
        <Link to={`${path}/add`} className="btn btn-sm btn-success mb-3 text-uppercase">Add Book</Link>
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
              purchaseAmount={book.purchaseAmount}
              variant={"primary"} 
              image={tempImg}
              path={path}
              handleDelete={handleDelete}
            />)
          )
        }
        {
          books && !books.length && <h4>No book display</h4>
        }
      </Row>
      {
        modalShow.show && (
          <ModalComponent
          show={modalShow}
          handleDeleteTrue={handleDeleteTrue}
          onHide={()=> setModalShow(false)}
          />
        )
      }
    </>
  );
};

export default BookList;