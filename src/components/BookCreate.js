import { useState } from "react"

const BookCreate = ({onCreate}) => {
   const [title, setTitle] = useState('');

   const handleAddTitle = (event) => {
       setTitle(event.target.value)
   }

   const handleSubmit = (event) => {
      event.preventDefault();
      onCreate(title);
      setTitle('');
   }

   return <div>
    <form onSubmit= {handleSubmit} className="book-create">
        <label>Title</label>
        <input type="text" value={title} onChange={handleAddTitle}/>
        <button>Create!</button>
    </form>
   </div>
}

export default BookCreate