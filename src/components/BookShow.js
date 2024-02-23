import { useState} from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/use-books-context";

const BookShow = ({book}) => {
    const [showEdit, setShowEdit] = useState(false);
    const {deleteBookById} = useBooksContext();
    
    const handleDelete = () => {
      deleteBookById(book.id);
    }

    const handleShowEdit = () =>{
        setShowEdit(!showEdit);
    }

    const handleEditBook = () => {
        setShowEdit(false);
        // editBook(id, newTitle);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit)
       content = <BookEdit book={book} onSubmit={handleEditBook}/>

    return <div className="book-show">
        <img src={`https://picsum.photos/seed/${book.id}/300/200`} alt="books" />
        <div>{content}</div>
        <div className="actions">            
            <button className="edit" onClick={handleShowEdit}></button>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    </div>
 }
 
 export default BookShow