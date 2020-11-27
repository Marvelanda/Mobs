import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRatingSaga } from '../../redux/features/Places/progressSlice';

const ProgressBar = () => {
  const dispatch = useDispatch();

  let points = useSelector((state) => state.progress.points);

  if (points > 250) {
    points = 250;
  }

  const rating = useSelector((state) => state.progress.rating);
  const barwidth = 300;

  useEffect(() => {
    dispatch(getUserRatingSaga());
  }, [dispatch]);

  const mainContainer = {
    width: `${barwidth}px`,
  };

  const containerStyles = {
    padding: '2px 3px',
    height: 30,
    width: `${100}%`,
    backgroundColor: '#e7007f',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    padding: '2px 0 0',
    height: '100%',
    width: `${points < 100 ? points : points / 2.5}%`,
    backgroundColor: '#ffcd00',
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    float: 'left',
  };

  const labelStyles = {
    padding: '5px 0 0',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    width: `${barwidth}px`,
    textAlign: 'center',
  };

  return (
    <div style={mainContainer}>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <div style={labelStyles}>{`${points}/${rating < 2 ? 100 : 250}`}</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
