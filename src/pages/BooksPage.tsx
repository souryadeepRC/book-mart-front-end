import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Book from "src/components/books/book-list-page/Book";
import { fetchBooks } from "src/store/book/book-actions";
import {
  selectBookError,
  selectBookIsLoading,
  selectBooks,
} from "src/store/book/book-selectors";

const BooksPage: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectBookIsLoading);
  const error = useSelector(selectBookError);
  const books = useSelector(selectBooks);
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {books && (
        <div style={{ width: "60%", margin: "auto" }}>
          {books.map((book,index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export { BooksPage };

