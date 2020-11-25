import style from './style.module.css';

function Review({ author, review, pecularities }) {
  return (
    <li className={`${style.reviews_container}`}>
      <p>{author}:</p>
      <p>
        {review} Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
        atque quidem molestias placeat repellendus illo? Consequuntur laboriosam
        maxime minima dolorem rerum illo veniam, vitae doloremque quia. Placeat
        laboriosam enim debitis!
      </p>
    </li>
  );
}
export default Review;
