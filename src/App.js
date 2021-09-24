
// Export default function dapat dilakukan dalam satu baris
// apabila fungsinya functional

import { Container, Row } from "react-bootstrap";
import Book from "./components/book/Book";
import BookList from "./components/book/BookList";
import CounterComponent from "./components/counter/CounterComponent";
import Counter from "./components/counter/hooks/Counter";
import Member from "./components/member/Member";
import Home from "./pages/Home";
import Navigation from "./pages/template/Navigation";
import Footer from "./pages/template/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BookForm from "./components/book/BookForm";
import MemberList from "./components/member/MemberList";
import MemberForm from "./components/member/MemberForm";
import Routing from "./pages/template/Routing";

// Functional
function App() {

  return (
    <Routing />
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