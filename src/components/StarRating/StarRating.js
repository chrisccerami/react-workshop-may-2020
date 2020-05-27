import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';

export function StarRating({maxStars, rating}) {
  const starArray = Array.from({ length: maxStars })
  return starArray.map((star, i) => {
    if (i + 1 <= rating) {
      return <FaStar key={i} />;
    } else if (i < rating) {
      return <FaStarHalfAlt key={i} />;
    } else {
      return <FaRegStar key={i} />;
    }
  });
}
