import React from 'react';
import { IReview } from '../../redux/types/placesTypes';
import style from './style.module.css';

const Review: React.FC<IReview> = ({ author, review }) => {
  return (
    <li className={`${style.reviews_container}`}>
      <p>{author}:</p>
      <p>{review}</p>
    </li>
  );
};
export default Review;
