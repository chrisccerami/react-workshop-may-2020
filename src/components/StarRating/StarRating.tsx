import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { useTheme } from '../../hooks/useTheme';

interface Props {
  maxStars: number;
  rating: number;
}

export function StarRating({maxStars, rating}: Props) {
  const { theme } = useTheme();
  const starArray = Array.from({ length: maxStars })

  const elements = starArray.map((star, i) => {
    if (i + 1 <= rating) {
      return <FaStar key={i} color={theme.yellow} data-testid="full-star" />;
    } else if (i < rating) {
      return <FaStarHalfAlt key={i} color={theme.yellow} data-testid="half-star" />;
    } else {
      return <FaRegStar key={i} color={theme.yellow} data-testid="empty-star" />;
    }
  });

  return <>{elements}</>
}
