import React, { useState } from "react";
import Rating from "react-rating-stars-component";

const RatingComponent = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h4>Rate Our Service</h4>
      <Rating
        count={5}
        onChange={handleRatingChange}
        size={24}
        activeColor="#ffd700"
      />
      <p>Your Rating: {rating} / 5</p>
    </div>
  );
};

export default RatingComponent;
