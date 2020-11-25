import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRatingSaga } from "../../redux/features/Places/progressSlice";

const ProgressBar = () => {
  const dispatch = useDispatch();

  const progress = useSelector((state) => state.progress);
  const points = progress.points;
  const rating = progress.rating;
  const barwidth = 300;

  useEffect(() => {
    dispatch(getUserRatingSaga());
  }, []);
  
  const mainContainer = {
    width: `${barwidth}px`
  }

  const containerStyles = {
    height: 20,
    width: `${100}%`,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,

  }

  const fillerStyles = {
    height: '100%',
    width: `${points < 100 ? points : points / 2.5}%`,
    backgroundColor: 'black',
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    float: 'left'
  }

  const labelStyles = {
    padding: 1,
    color: 'grey',
    fontWeight: 'bold',
    width: `${barwidth}px`,
    'text-align': 'center'
  }


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
