import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import {getUser} from '../../redux/features/Places/authSlice'
import style from './style.module.css';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [exist, setExist] = useState(true);
  const dispatch = useDispatch()
  const history = useHistory();
  const user = useSelector((state)=>state.auth.username)

  const doFetch = async (e) => {
    e.preventDefault();
    dispatch(getUser(email, password))
  };

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
        {exist ? (
          ''
        ) : (
            <p>
              Такого пользователя не существует или вы ввели неверные данные :---O
            </p>
          )}
        <button type='submit' className='button' onClick={doFetch}>
          Войти
        </button>
      </form>
    </div>
  );
}

export default Signin;
