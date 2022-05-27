import Book from "./Book"
import { AiOutlineSearch } from 'react-icons/ai'

const BookList = ({ books, searchValue, setSearchValue }) => {

  return (
      <>
      <div className="search-bar">
          <AiOutlineSearch className='search-icon'/>
          <input
            type="search"
            className="search-input" 
            placeholder="SÖK HÄRIFRÅN..." 
            value={searchValue}
            onChange={e=> setSearchValue(e.target.value)}
            />
      </div>
        <section className="book-list">
            {
                books.map(book=> (
                    <Book key={book.id} book={book} />
                ))
            }
        </section>
      </>
  )
}

export default BookList