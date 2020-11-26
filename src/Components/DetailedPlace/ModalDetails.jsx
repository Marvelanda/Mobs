import ReactDom from 'react-dom';
import style from './style.module.css';

const ModalDetails = ({ open, children, onClose }) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {open && (
        <div className={style.modal}>
          <div className={style.modalContentWr}>
            <div>{children}</div>
          </div>
        </div>
      )}
    </>,
    document.getElementById('portal-detailed')
  );
};

export default ModalDetails;
