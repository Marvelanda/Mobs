import { useState } from 'react';
import { useDispatch} from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addPlaceReviewSaga } from '../../redux/features/Places/reviewSlice';
import style from './style.module.css';

function AddReview() {
  const [review, setReview] = useState('');
  const [pecularities, setPecularities] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();

  const handlerReview = (evt) => {
    setReview(evt.target.value);
  };

  const handlerPeculiarities = (evt) => {
    setPecularities(evt.target.value);
  };

  const addReview = (evt) => {
    evt.preventDefault();
    dispatch(addPlaceReviewSaga(review, pecularities, id));
    setReview('');
    history.push(`/places/${id}`);
  };

  return (
    <div className={`${style.container}`}>
      <form className='form text' onSubmit={addReview}>
        <p>Ваш отзыв:</p>
        <textarea
          className={style.textarea}
          type='text'
          onChange={handlerReview}
          value={review}
        ></textarea>
        <p>Особенности посещения (если есть):</p>
        <textarea
          type='text'
          onChange={handlerPeculiarities}
          value={pecularities}
        ></textarea>
        <button className='button' type='submit'>
          Добавить отзыв
        </button>
      </form>
    </div>
  );
}

export default AddReview;
