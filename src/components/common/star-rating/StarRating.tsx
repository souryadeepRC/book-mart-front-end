import { Rating } from "@mui/material";
import React from "react";
import "./StarRating.scss"; // Import SCSS file for styling

interface StarRatingProps {
  value: number;
  max: number;
}

const StarRating: React.FC<StarRatingProps> = ({ value, max }) => {
  return (
    <div className="star-rating">
      <Rating
        name="star-rating"
        value={value}
        max={max}
        readOnly
        precision={0.5} // Optional: set precision to half stars
        sx={{
          color: "#f0c14b", // Amazon's star color
          "& .MuiRating-iconFilled": {
            color: "#f0c14b", // Amazon's star color
          },
          "& .MuiRating-iconEmpty": {
            color: "#ccc", // Empty star color
          },
        }}
      />
    </div>
  );
};

export default StarRating;
