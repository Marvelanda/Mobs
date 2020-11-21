import style from './style.module.css';

function Review({ author, review }) {
  return (
    <div className={`${style.reviews_container}`}>
      <p>{author}:</p>
      <p>{review}</p>
    </div>
  );
}
export default Review;
