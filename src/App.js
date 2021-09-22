
// Export default function dapat dilakukan dalam satu baris
// apabila fungsinya functional

import { Container, Row } from "react-bootstrap";
import Book from "./components/book/Book";
import BookList from "./components/book/BookList";
import CounterComponent from "./components/counter/CounterComponent";
import Counter from "./components/counter/hooks/Counter";
import Member from "./components/member/Member";

// Functional
function App() {

  // variable ES6 (let dan const)
  // let -> mutable
  // const -> immutable

  // array
  // const fruits = ['Mango', 100, true, 'Banana'];
  // const print = fruits.forEach(fruit => {
  //   return fruit; // tidak mengembalikan nilai -> undefined
  // });

  // console.log(print);

  // // array of object
  // const students = [
  //   {
  //     id: 1,
  //     name: 'Jonar',
  //     npm: '12345678',
  //     sex: 'L'
  //   },
  //   {
  //     id: 3,
  //     name: 'Julia',
  //     npm: '24135876',
  //     sex: 'L'
  //   }
  // ];

  // const printStudent = students.map(student => {
  //   return student; // mengembalikan nilai -> map -> nyalin array yang asli ke array yang baru
  // });

  // console.log(printStudent);

  return (
    <Container>
      <Row>
      {/* reusable component */}
        {/* <BookList /> */}
        {/* <CounterComponent /> */}
        {/* <Counter /> */}
        {/* <Book /> */}
        <Member />
      </Row>
    </Container>
  );
}

export default App;

/**
 * Ada beberapa cara mendeklarasikan Component
 * 1. Fungsional Component
 * 2. Arrow Function Component
 * 3. Class Component
 */

/**
 * Component ada 2 (dua) jenis
 * 1. stateLess Component -> functional Component
 * 2. stateFull Component -> class Component
 */