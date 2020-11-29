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

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.status);
  const isOpenPlaceMark = useSelector((state) => state.places.isOpenPlaceMark);

  const logout = () => {
    localStorage.clear();
    dispatch(removeUser());
  };

  useEffect(() => {
    if (localStorage.length !== 0) {
      dispatch(setStatus());
    }
  }, [dispatch]);

  const closeModals = () => {
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
                onClick={closeModals}
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
}

export default Header;
