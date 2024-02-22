import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = (title) => {
        //   console.log("Need to add book with: ", title);
        const updatedBooks = [...books,{id:Math.round(Math.random()*9999), title}];
        setBooks(updatedBooks);
    }

    const deleteBookById = (id) => {
       const updatedBooks =  books.filter((book) => {
            return book.id !== id
      });
       setBooks(updatedBooks);
    }

    const editBookById = (id, newTitle) => {
       const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return {...book, title: newTitle}
          };
          return book;
       })
       setBooks(updatedBooks);
    }

    return <div>
        <h1>Reading List</h1>
        <BookList books={books} deleteBook={deleteBookById} editBook={editBookById}/>
        <BookCreate onCreate={createBook}/>
    </div>
}

export default App;
