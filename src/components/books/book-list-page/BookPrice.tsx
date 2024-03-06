// styles
import "./Book.scss";
type BookPriceProps = {
  price: {
    actualPrice: number;
    offerPercentage: number;
    offerValidityDate: Date;
    offerPrice: number;
    savedPrice: number;
  };
};
const BookPrice = ({ price }: BookPriceProps) => {
  const { actualPrice, offerPercentage, offerPrice } = price;
  return (
    <div className="book__price">
      <section>
        <div className="book__offer-price">
          <span className="currency">&#8377;</span>
          <span className="amount">{Math.round(offerPrice)}</span>
        </div>
      </section>
      <section className="book__actual-price">
        <span>M.R.P:</span>
        <span className="amount">
          &#8377;{Math.round(actualPrice)}
        </span>
      </section>
      <span>({offerPercentage}% off)</span>
    </div>
  );
};
export { BookPrice };

