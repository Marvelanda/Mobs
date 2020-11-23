import style from './style.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={`${style.header}`}>
      <nav className={`container ${style['header-container']}`}>
        <ul className={`${style['navigation-list']}`}>
          <li className={`${style['navigation-list__item']}`}>
            <Link key='main' to='/'>
              Главная страница
            </Link>
          </li>
          {sessionStorage.user ? (
            <>
              <li
                key='placesList'
                className={`${style['navigation-list__item']}`}
              >
                <Link to='/places'>Список мест</Link>
              </li>
              <li key='profile' className={`${style['navigation-list__item']}`}>
                <Link to='/profile'>Профиль</Link>
              </li>
            </>
          ) : (
            <>
              <li key='signup' className={`${style['navigation-list__item']}`}>
                <Link to='/signup'>Регистрация</Link>
              </li>
              <li key='signin' className={`${style['navigation-list__item']}`}>
                <Link to='/signin'>Войти</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
