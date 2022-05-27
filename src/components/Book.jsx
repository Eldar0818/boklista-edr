
const Book = ({ book }) => {
  return (
    <div className="book">
        <img src={book.poster} className="book-poster" alt="book-poster" />
        <div className="book-info">
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
        </div>
    </div>
  )
}

export default Book