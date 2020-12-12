import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRatingSaga } from '../../redux/features/Places/progressSlice';
import { RootState } from '../../redux/store';
import { IFillerStyles } from './interfaces';
import style from './style.module.css';

const ProgressBar: React.FC = () => {
  const dispatch = useDispatch();

  let points: number = useSelector((state: RootState) => state.progress.points);

  if (points > 250) {
    points = 250;
  }

  const rating: number = useSelector(
    (state: RootState) => state.progress.rating
  );

  useEffect(() => {
    dispatch(getUserRatingSaga());
  }, [dispatch]);

  const fillerStyles: IFillerStyles = {
    width: `${points < 100 ? points : points / 2.5}%`,
    transition: 'width 1s ease-in-out',
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.containerStyles}>
        <div className={style.fillerStyles} style={fillerStyles}>
          <div className={style.labelStyles}>{`${points}/${
            rating < 2 ? 100 : 250
          }`}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
