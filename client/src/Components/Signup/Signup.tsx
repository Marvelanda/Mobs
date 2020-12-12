import React from 'react';
import { useEffect, useState, MouseEvent } from 'react';
import style from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../redux/features/Places/authSlice';
import { useHistory } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { ModalState } from '../../redux/types/placesTypes';

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUserName] = useState<string>('');
  // eslint-disable-next-line no-unused-vars
  const [exist, setExist] = useState<boolean>(false);

  const dispatch = useDispatch();

  const history = useHistory();

  const fivePlaces: ModalState[] = useSelector(
    (state: RootState) => state.fivePlaces.fivePlaces
  );
  const user: string | undefined = useSelector(
    (state: RootState) => state.auth.userName
  );

  const doFetch = async (e: MouseEvent): Promise<void> => {
    e.preventDefault();
    dispatch(addUser(email, username, password, fivePlaces));
  };

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);

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
          <span className='iAgree'>
            Я согласен на обработку персональных данных
          </span>
        </label>
      </form>
    </div>
  );
};

export default Signup;
