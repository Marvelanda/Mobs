import React from 'react';
import ReactDom from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { openPlaceMark } from '../../redux/features/Places/placeSlice';
import { RootState } from '../../redux/store';
import { ModalState } from '../../redux/types/placesTypes';
import { IModal } from './interfaces';
import style from './style.module.css';

const Modal: React.FC<IModal> = ({ open, info, onClose }) => {
  const dispatch = useDispatch();

  const user: boolean = useSelector((state: RootState) => state.auth.status);

  const modalClass: string = useSelector(
    (state: RootState) => state.places.modalClass
  );
  const modalPlaceMarkInfo: ModalState = useSelector(
    (state: RootState) => state.places.modalPlaceMarkInfo
  );

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {open && (
        <div className={style.modal}>
          <div className={style.modalContentWr}>
            <div onClick={onClose} className={style.closeButton}></div>
            <div className='text'>
              {user ? (
                info && (
                  <div className={modalClass}>
                    <h2>{info.placeName}</h2>
                    <p className={style.description}>Часы работы:</p>
                    <p className={style.description}>
                      {info.info?.workingHours}
                    </p>
                    <p className={style.description}>Aдрес:</p>
                    <p className={style.description}>{info.info?.address}</p>
                    <Link to={`/places/${modalPlaceMarkInfo._id}`}>
                      <p onClick={() => dispatch(openPlaceMark(false))}>
                        Подробнее
                      </p>
                    </Link>
                    {info.placePhotoUrl && (
                      <img
                        src={info.placePhotoUrl[0]}
                        alt='foto'
                        width='400px'
                        height='267px'
                      />
                    )}
                  </div>
                )
              ) : (
                <div className={modalClass}>
                  <h2 onClick={() => dispatch(openPlaceMark(false))}>
                    <Link to='/signin'>Войдите</Link>
                  </h2>
                  <h2>или</h2>
                  <h2 onClick={() => dispatch(openPlaceMark(false))}>
                    <Link to='/signup'> зарегистрируйтесь</Link>
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById('portal') as HTMLFormElement
  );
};

export default Modal;
