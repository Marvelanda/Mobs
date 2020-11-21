function Review({ author, review }) {
  return (
    <div className='text'>
      <div>
        {author}: {review}
      </div>
    </div>
  );
}
export default Review;
