import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addPlaceReviewSaga } from '../../redux/features/Places/reviewSlice';
import style from './style.module.css';

const AddReview: React.FC = () => {
  const [review, setReview] = useState<string>('');
  const [pecularities, setPecularities] = useState<string>('');

  const dispatch = useDispatch();
  const history = useHistory();

  const { id } = useParams<{ id: string }>();

  const handlerReview = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handlerPeculiarities = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setPecularities(evt.target.value);
  };

  const addReview = (evt: FormEvent<HTMLFormElement>) => {
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
          onChange={handlerReview}
          value={review}
        ></textarea>
        <p>Особенности посещения (если есть):</p>
        <textarea
          onChange={handlerPeculiarities}
          value={pecularities}
        ></textarea>
        <button className='button' type='submit'>
          Добавить отзыв
        </button>
      </form>
    </div>
  );
};

export default AddReview;
