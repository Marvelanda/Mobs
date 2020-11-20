import style from './style.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={`${style.header}`}>
      <nav className={`container ${style['header-container']}`}>
        <ul className={`${style['navigation-list']}`}>
          <li className={`${style['navigation-list__item']}`}>
            <Link to='/'>Главная страница </Link>
          </li>

          <li className={`${style['navigation-list__item']}`}>
            <Link to='/signin'>Регистрация</Link>
          </li>

          <li className={`${style['navigation-list__item']}`}>
            <Link to='/signup'>Войти</Link>
          </li>

          <li className={`${style['navigation-list__item']}`}>
            <Link to='/list'>Список мест</Link>
            <Link to='/profile'>Профиль</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
