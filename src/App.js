import { useState } from 'react'
import './App.css';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import books from './data'

function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <main className="App">
      <Navbar/>
      <BookList
        books={books.filter(book=> book.title.toLowerCase().includes(searchValue) || book.author.toLowerCase().includes(searchValue) )}
        searchValue={searchValue} 
        setSearchValue={setSearchValue}
      />
      <footer>
        <p>Yalikun Yilida May 26 2022 &copy;</p>
      </footer>
    </main>
  );
}

export default App;
