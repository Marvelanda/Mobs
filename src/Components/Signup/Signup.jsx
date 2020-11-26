import { useEffect, useState } from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/features/Places/authSlice';
import { useHistory } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUserName] = useState('');
  const [exist, setExist] = useState(false);
  const user = useSelector((state) => state.auth.userName);
  const dispatch = useDispatch();
  const history = useHistory();
  const fivePlaces = useSelector((state) => state.fivePlaces.fivePlaces);

  const doFetch = async (e) => {
    e.preventDefault();
    dispatch(addUser(email, username, password, fivePlaces));
  };

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [user]);

  return (
    <div className={`${style.container}`}>
      <form className='form animate__animated animate__fadeIn'>
        <h3 className={`${style.headTitle}`}>Регистрация</h3>
        <div className='input-clue text'>
          {/* <p className='description-clue'>Введите имя</p> */}

          <input
            type='text'
            placeholder='Имя'
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
        <div className='input-clue text'>
          {/* <p className='description-clue'>Введите e-mail</p> */}

          <input
            type='email'
            placeholder='Email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className='input-clue text'>
          {/* <p className='description-clue'>Введите пароль</p> */}

          <input
            type='password'
            placeholder='Пароль'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type='submit' className='button' onClick={doFetch}>
          Зарегистрироваться
        </button>
        <label
          className={`description-clue ${style['description-checkbox']} text`}
        >
          <input type='checkbox' required />
          {exist ? <p>Такой email или имя пользователя существует!!!</p> : ''}
          <span className="iAgree">Я согласен на обработку персональных данных</span>
        </label>
      </form>
    </div>
  );
}

export default Signup;
