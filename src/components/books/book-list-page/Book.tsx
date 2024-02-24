import { Card, CardContent } from "@mui/material";
// types
import { BookType } from "src/types/book-types";
// styles
import StarRating from "src/components/common/star-rating/StarRating";
import { formatDate } from "src/utils/data-utils";
import "./Book.scss";
import { BookPrice } from "./BookPrice";
interface BookProps {
  book: BookType;
}

const Book = ({ book }: BookProps): JSX.Element => { 
  
  return (
    <Card className="book-card">
      <img
        className="book-cover-image"
        src={book.coverImage}
        alt={book.title}
      />
      <CardContent className="book__content" sx={{ paddingTop: 0 }}>
        <span className="book__ad">Sponsored</span>
        <span className="book__title">{book.title}</span>
        <div className="book_details">
          by <span className="book__author">{book.author}</span> |
          <span className="book__publish-date">
            {formatDate(new Date(book.publicationDate))}
          </span>
        </div>
        <div className="book_details">
          <StarRating value={book.ratings} max={5} />
          <span>{book.reviews}</span>
        </div>
        <span className="book__type">{book.type}</span>
        <span className="book__offer">
          Limited time deal till{" "}
          {formatDate(new Date(book.price.offerValidityDate))}
        </span>
        <BookPrice price={book.price} />
      </CardContent>
    </Card>
  );
};

export default Book;
