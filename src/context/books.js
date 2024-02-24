import { createContext, useState, useCallback } from "react";
import axios from "axios";
import config from "../config";

const BooksContext = createContext();

const Provider = ({children}) => {
    axios.defaults.baseURL = config.baseURL;

    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        const response = await axios.get("/books");
        setBooks(response.data);
    }

    const stableGetBooks = useCallback(getBooks,[]);

    const createBook = async (title) => {
        // const updatedBooks = [...books,{id:Math.round(Math.random()*9999), title}];
        //setBooks(updatedBooks);

        const response = await axios.post("/books", {
            title: title
        });
        
        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    }

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
    
     const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        stableGetBooks,
        createBook
     }

    return <BooksContext.Provider value={valueToShare}>
          {children}
    </BooksContext.Provider>
};

export {Provider};
export default BooksContext;