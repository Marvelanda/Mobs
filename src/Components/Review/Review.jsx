import style from './style.module.css';

function Review({ author, review, pecularities }) {
  return (
    <li className={`${style.reviews_container}`}>
      <p>{author}:</p>
      <p>{review}</p>
      <p>Особенности: {pecularities}</p>
    </li>
  );
}
export default Review;
