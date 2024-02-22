import BookShow from "./BookShow"

const BookList = ({books, deleteBook, editBook}) => {
    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} deleteBook={deleteBook} editBook={editBook}/>
    })
    return <div className="book-list">{renderedBooks}</div>
 }
 
 export default BookList