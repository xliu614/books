import { useState } from "react";
import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";
import config from "./config";

axios.defaults.baseURL = config.baseURL;

const App = () => {
    const [books, setBooks] = useState([]);

    const createBook = async (title) => {
        // const updatedBooks = [...books,{id:Math.round(Math.random()*9999), title}];
        //setBooks(updatedBooks);

        const response = await axios.post("/books", {
            title: title
        });
        
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }

    const getBooks = async () => {
        const response = await axios.get("/books");
        setBooks(response.data);
    }

    useEffect(() => {
        getBooks();
    },[]);

    //DO NOT DO:
    //call getBooks directly, this will get useState of books infinitely

    const deleteBookById = async (id) => {
       await axios.delete(`/books/${id}`);
       
       const updatedBooks =  books.filter((book) => {
            return book.id !== id
      });
       setBooks(updatedBooks);
    }

    const editBookById = async(id, newTitle) => {
       const response = await axios.put(`/books/${id}`, 
       {title:newTitle});

       const updatedBooks = books.map((book) => {
          if (book.id === id) {
            return {...book, ...response.data}
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
