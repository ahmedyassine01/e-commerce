import React from 'react';
import { FaStar } from 'react-icons/fa';


const StarRating = ({ rating, onRatingChange }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} onClick={() => onRatingChange(index + 1)}>
      <FaStar color={index < rating ? '#ffc107' : '#e4e5e9'} size={20} style={{ cursor: 'pointer' }} />
    </span>
  ));

  return <div>{stars}</div>;
};

export default StarRating;
