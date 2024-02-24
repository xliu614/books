import {useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/use-books-context";



//DO NOT DO:
//call getBooks directly, this will get useState of books infinitely
const App = () => {
    const { stableGetBooks} = useBooksContext();

    useEffect(() => {
        stableGetBooks();
    },[stableGetBooks]);    

    return <div>
        <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
}

export default App;
