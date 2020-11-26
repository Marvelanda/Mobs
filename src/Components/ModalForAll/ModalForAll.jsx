import ReactDom from 'react-dom';
import style from './style.module.css';

const ModalForAll = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {open && (
        <div onClick={onClose} className={style.modal}>
          <div className={style.modalContentWr}>
            <div onClick={onClose} className={style.closeButton}></div>
            <div className={style.text}>{children}</div>
          </div>
        </div>
      )}
    </>,
    document.getElementById('portal-for-all')
  );
};

export default ModalForAll;
