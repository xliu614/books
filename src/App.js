import { useContext, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";



//DO NOT DO:
//call getBooks directly, this will get useState of books infinitely
const App = () => {
    const { getBooks} = useContext(BooksContext);

    useEffect(() => {
        getBooks();
    },[]);    

    return <div>
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
}

export default App;
