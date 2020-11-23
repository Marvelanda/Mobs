import { Link } from 'react-router-dom';
import style from './style.module.css';

function NotFound() {
  return (
    <div className={style.container}>
      <h1>Ой, не та дверь</h1>
      <img src='/img/TX3V.gif' alt='notfound' />
    </div>
  );
}

export default NotFound;
