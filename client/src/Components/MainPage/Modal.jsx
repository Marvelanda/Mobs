import ReactDom from 'react-dom';
import style from './style.module.css';

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {open && (
        <div className={style.modal}>
          <div className={style.modalContentWr}>
            <div onClick={onClose} className={style.closeButton}></div>
            <div className='text'>{children}</div>
          </div>
        </div>
      )}
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
