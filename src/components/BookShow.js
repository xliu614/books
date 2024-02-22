import { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({book, deleteBook, editBook}) => {
    const [showEdit, setShowEdit] = useState(false);
    
    const handleDelete = () => {
      deleteBook(book.id);
    }

    const handleShowEdit = () =>{
        setShowEdit(!showEdit);
    }

    const handleEditBook = (id, newTitle) => {
        setShowEdit(false);
        editBook(id, newTitle);
    }

    let content = <h3>{book.title}</h3>
    if(showEdit)
       content = <BookEdit book={book} editBook={handleEditBook}/>

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