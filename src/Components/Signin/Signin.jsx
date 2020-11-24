import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { getUser } from '../../redux/features/Places/authSlice';

import style from './style.module.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.auth.status);
  const error = useSelector((state) => state.auth.error);
  console.log(error);
  const doFetch = async (e) => {
    e.preventDefault();
    dispatch(getUser(email, password));
    // if (!user) {
    //   setMessage(
    //     'Такого пользователя не существует или вы ввели неверные данные'
    //   );
    // }
  };

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

  const emailHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const passwordHandler = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <div className={`${style.container}`}>
      <form className={`${style.form} form animate__animated animate__fadeIn`}>
        <div className='input-clue text'>
          <p className='description-clue'>Введите e-mail</p>
          <input
            onChange={emailHandler}
            type='email'
            value={email}
            placeholder='Email address'
          />
        </div>
        <div className='input-clue text'>
          <p className='description-clue'>Введите пароль</p>
          <input
            onChange={passwordHandler}
            type='password'
            value={password}
            placeholder='Password'
          />
        </div>
        {error ? <p>{error}</p> : null}
        <button type='submit' className='button' onClick={doFetch}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default Signin;
