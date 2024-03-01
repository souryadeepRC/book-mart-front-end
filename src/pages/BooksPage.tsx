import { useEffect, useRef } from "react";
// library
import { useDispatch, useSelector } from "react-redux";
// common components
import { Loader } from "src/components/common/CommonComponents";
// components
import Book from "src/components/books/book-list-page/Book";
// actions
import { fetchBooks } from "src/store/book/book-actions";
//selectors
import {
  selectBookError,
  selectBookIsLoading,
  selectBooks,
} from "src/store/book/book-selectors";
// types
import { AppDispatch } from "src/store/reducer-types";
import { BookType } from "src/types/book-types";

const BooksPage: React.FC = () => {
  // store
  const dispatch:AppDispatch = useDispatch();
  const loading:boolean = useSelector(selectBookIsLoading);
  const error:string = useSelector(selectBookError);
  const books:BookType[]|[] = useSelector(selectBooks);
  // ref
  const isInitialMount = useRef<boolean>(true);

  // effects
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <div>
      <Loader loading={loading} />
      {error && <p>Error: {error}</p>}
      {books && (
        <div style={{ width: "60%", margin: "auto" }}>
          {books.map((book, index) => (
            <Book key={index} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export { BooksPage };

