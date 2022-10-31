import logo from "./logo.svg";
import "./App.css";
import Book from "./components/Book";
import CreateBook from "./components/createBook";
import { getBooks } from "./utils/book";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    getBooks().then((res) => {
      setBooks(res.data);
    });
  }, [books]);
  return (
    <div className="App">
      <span>
        <h1>Hello Seamfix</h1>
        <CreateBook />
      </span>

      <div className="books">
       {
          books.map((book) => {
            return <Book key={book._id} {...book} />
          })
       }
        <Book />
        <Book />
      </div>
      <style jsx>{`
        .books {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}

export default App;
