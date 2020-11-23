import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector((state) => state.auth.userName);

  const logout = () => {
    localStorage.clear();
  };

  return (
    <div className={`${style.header}`}>
      <nav className={`container ${style['header-container']}`}>
        <ul className={`${style['navigation-list']}`}>
          <li className={`${style['navigation-list__item']}`}>
            <Link key='main' to='/'>
              Главная страница
            </Link>
          </li>
          {localStorage.length ? (
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
              <li
                key='logout'
                onClick={logout}
                className={`${style['navigation-list__item']}`}
              >
                <Link to='/'>Выйти</Link>
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
