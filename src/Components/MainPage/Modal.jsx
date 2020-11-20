import ReactDom from 'react-dom';
import style from './style.module.css';

const Modal = ({ open, children }) => {
  if (!open) return false;

  return ReactDom.createPortal(
    <>
      <div className={style.modal}>
        <div className={style.modalContentWr}>
          <div className='text'>{children}</div>
        </div>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
