import React from 'react';
import style from './style.module.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, setStatus } from '../../redux/features/Places/authSlice';

import CheckUserPlace from '../CheckUserPlace/CheckUserPlace';

import ProgressBar from '../ProgressBar/ProgressBar';

import {
  openPlaceMark,
  checkPlaceOpenModal,
} from '../../redux/features/Places/placeSlice';
import { RootState } from '../../redux/store';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const user: boolean = useSelector((state: RootState) => state.auth.status);

  const logout = (): void => {
    closeModals();
    localStorage.clear();
    dispatch(removeUser());
  };

  useEffect(() => {
    if (localStorage.length !== 0) {
      dispatch(setStatus(true));
    }
  }, [dispatch]);

  const closeModals = (): void => {
    dispatch(openPlaceMark(false));
    dispatch(checkPlaceOpenModal(false));
  };

  return (
    <div className={`${style.header}`}>
      <nav className={`container ${style['header-container']}`}>
        <img src='/img/MOBS.svg' alt='logo' width='200px' />
        <ul className={`${style['navigation-list']}`}>
          <li
            onClick={closeModals}
            className={`${style['navigation-list__item']}`}
          >
            <Link key='main' to='/'>
              Главная страница
            </Link>
          </li>
          {user ? (
            <>
              <li
                onClick={closeModals}
                key='placesList'
                className={`${style['navigation-list__item']}`}
              >
                <Link to='/places'>Список мест</Link>
              </li>
              <li
                key='checkUserPlace'
                className={`${style['navigation-list__item']}`}
              >
                <CheckUserPlace />
              </li>

              <li
                key='logout'
                onClick={logout}
                className={`${style['navigation-list__item']}`}
              >
                <Link to='/'>Выйти</Link>
              </li>

              <li
                key='progress'
                className={`${style['navigation-list__item']}`}
              >
                <ProgressBar />
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
};

export default Header;
