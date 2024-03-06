export type BookType = {
  id: number;
  title: string;
  author: string;
  genre: string;
  subGenre: string;
  price: {
    actualPrice: number;
    offerPercentage: number;
    offerValidityDate: Date;
    offerPrice: number;
    savedPrice: number;
  };
  description: string;
  coverImage: string;
  ratings: number;
  reviews: number;
  pages: number;
  publisher: string;
  publicationDate: Date;
  language: string;
  type: string; 
};
