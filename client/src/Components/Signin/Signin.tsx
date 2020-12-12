import React from 'react';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { getUser } from '../../redux/features/Places/authSlice';
import { RootState } from '../../redux/store';

import style from './style.module.css';

const Signin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state: RootState) => state.auth.status);
  const error = useSelector((state: RootState) => state.auth.error);

  const doFetch = (evt: MouseEvent): void => {
    evt.preventDefault();
    dispatch(getUser(email, password));
  };

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);

  const emailHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const passwordHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value);
  };

  return (
    <div className={`${style.container}`}>
      <form className={`${style.form} form animate__animated animate__fadeIn`}>
        <h3 className={`${style.headTitle}`}>Вход</h3>

        <div className='input-clue text'>
          <input
            onChange={emailHandler}
            type='email'
            value={email}
            placeholder='Email'
          />
        </div>
        <div className='input-clue text'>
          <input
            onChange={passwordHandler}
            type='password'
            value={password}
            placeholder='Пароль'
          />
        </div>
        {error ? (
          <div className='input-clue text'>
            <p className={style.error}>{error}</p>
          </div>
        ) : null}
        <button type='submit' className='button' onClick={doFetch}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default Signin;
