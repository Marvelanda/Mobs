import style from './style.module.css';

function Review({ author, review }) {
  return (
    <li className={`${style.reviews_container}`}>
      <p>{author}:</p>
      <p>{review}</p>
    </li>
  );
}
export default Review;
