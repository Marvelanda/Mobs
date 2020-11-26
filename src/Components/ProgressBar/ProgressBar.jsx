import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserRatingSaga } from '../../redux/features/Places/progressSlice';

const ProgressBar = () => {
  console.log('progress');
  const dispatch = useDispatch();

  const progress = useSelector((state) => state.progress);
  const points = progress.points;
 
  const rating = progress.rating;
  const barwidth = 300;

  useEffect(() => {
    dispatch(getUserRatingSaga());
  }, []);

  const mainContainer = {
    width: `${barwidth}px`,
  };

  const containerStyles = {
    padding: '1px 0 2px',
    height: 25,
    width: `${100}%`,
    backgroundColor: '#e7007f',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${points < 100 ? points : points / 2.5}%`,
    backgroundColor: '#ffcd00',
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    float: 'left',
  };

  const labelStyles = {
    padding: 1,
    color: 'black',
    fontWeight: 'bold',
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
