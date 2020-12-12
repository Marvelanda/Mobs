import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlacesListSaga } from '../../redux/features/Places/placeSlice';
import { RootState } from '../../redux/store';
import { IPlace } from '../../redux/types/placesTypes';
import Place from '../Place/Place';

import style from './style.module.css';

const PlacesList: React.FC = () => {
  const dispatch = useDispatch();

  const places: IPlace[] = useSelector(
    (state: RootState) => state.places.places
  );

  useEffect(() => {
    dispatch(getPlacesListSaga());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {places.length &&
          places.map((el) => {
            return <Place key={el._id} {...el} />;
          })}
      </ul>
    </div>
  );
};

export default PlacesList;
