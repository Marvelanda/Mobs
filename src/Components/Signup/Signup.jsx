import { useState } from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { newUserName } from '../../redux/features/Places/authSlice';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [exist, setExist] = useState(false);

  const dispatch = useDispatch();

  const fivePlaces = useSelector((state) => state.fivePlaces.fivePlaces);

  const doFetch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password, email, fivePlaces }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await response.json();
      setExist(json.exist);
      if (json.done) {
        dispatch(newUserName(username));
        localStorage.setItem('user', json.userid);
      }
      console.log(json);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  return (
    <div className={`${style.container}`}>
      <form className='form animate__animated animate__fadeIn'>
        <div className='input-clue text'>
          <p className='description-clue'>Введите имя</p>

          <input
            type='text'
            placeholder='Name'
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className='input-clue text'>
          <p className='description-clue'>Введите e-mail</p>

          <input
            type='email'
            placeholder='Email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='input-clue text'>
          <p className='description-clue'>Введите пароль</p>

          <input
            type='password'
            placeholder='Password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <label
          className={`description-clue ${style['description-checkbox']} text`}
        >
          <input type='checkbox' required />
          {exist ? <p>Такой email или имя пользователя существует!!!</p> : ''}
          <span>Я согласен на обработку персональных данных</span>
        </label>
        <button type='submit' className='button' onClick={doFetch}>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Signup;
