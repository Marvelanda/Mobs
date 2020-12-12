import React from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IModal } from '../DetailedPlace/interfaces';
import style from './style.module.css';

const ModalForAll: React.FC<IModal> = ({ open, onClose }) => {
  const message: string = useSelector(
    (state: RootState) => state.places.message
  );

  const modalClass: string = useSelector(
    (state: RootState) => state.places.modalClass
  );

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {open && (
        <div onClick={onClose} className={style.modal}>
          <div className={style.modalContentWr}>
            <div onClick={onClose} className={style.closeButton}></div>
            <div className={style.text}>
              {
                <div className={modalClass}>
                  <h2>{message}</h2>
                </div>
              }
            </div>
          </div>
        </div>
      )}
    </>,
    document.getElementById('portal-for-all') as HTMLFormElement
  );
};

export default ModalForAll;
