import { useState, useContext } from "react"
import BooksContext from "../context/books";

const BookCreate = () => {
   const [title, setTitle] = useState('');
   const {createBook} = useContext(BooksContext);

   const handleAddTitle = (event) => {
       setTitle(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      createBook(title);
      setTitle('');
   }

   return <div>
    <form onSubmit= {handleSubmit} className="book-create">
        <label>Title</label>
        <input type="text" value={title} onChange={handleAddTitle}/>
        <button>Create</button>
    </form>
   </div>
}

export default BookCreate