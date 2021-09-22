import { Card, Container, Row } from "react-bootstrap";
import BookComponent from "./BookComponent";
import { books } from "../../api/BookApi";

const BookList = ({ dataBook }) => {
    return (
      <Container>
        <Row>
          {
            dataBook.map((book) =>  (
              <BookComponent 
                key={book.id}
                title={book.title}
                image={book.image}
                description={book.description} 
                variant={"primary"} 
              />)
            )
          }
        </Row>
      </Container>
    );
};

export default BookList;