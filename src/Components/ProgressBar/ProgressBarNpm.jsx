import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Progress } from 'semantic-ui-react'
import { getUserRatingSaga } from '../../redux/features/Places/progressSlice';
import style from './style.module.css';

function ProgressBar() {
  const dispatch = useDispatch();

  const progress = useSelector((state) => state.progress);
  const points = progress.points;
  const rating = progress.rating;

  useEffect(() => {
    dispatch(getUserRatingSaga());
  }, []);

  return (
    <div className={style.progressBar}>
      <Progress text='center' value={points} total={rating < 2 ? 100 : 250} progress='ratio' />
    </div>
  )
}

export default ProgressBar
