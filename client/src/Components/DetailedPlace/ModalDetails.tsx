import React from 'react';
import ReactDom from 'react-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { IModal } from './interfaces';
import style from './style.module.css';

const ModalDetails: React.FC<IModal> = ({ open, onClose }) => {
  const shareStatus: string = useSelector(
    (state: RootState) => state.sharedPlace.shareStatus
  );

  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {open && (
        <div onClick={onClose} className={style.modal}>
          <div className={style.modalContentWr}>
            {
              <div>
                {shareStatus ? (
                  <h2>{shareStatus}</h2>
                ) : (
                  <h2 className={style.text}>Пожалуйста, заполните поле</h2>
                )}
              </div>
            }
          </div>
        </div>
      )}
    </>,
    document.getElementById('portal-detailed') as HTMLFormElement
  );
};

export default ModalDetails;
