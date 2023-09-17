/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// Rating.js
import React, { useState } from 'react';
import "./Rating.css";
const Rating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (newRating) => {
    setRating(newRating);
    onRatingChange(newRating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="rating">
      {renderStars()}
    </div>
  );
};

export default Rating;
