import { useState } from 'react';
import style from './style.module.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [exist, setExist] = useState(true)
  // const dispatch = useDispatch();

  // const changeStatus = () => {
  //   dispatch(AC.changeStatus());
  // };

  // const history = useHistory();

  // const sendForm = (evt) => {
  //   evt.preventDefault();
  //   fetch(`${process.env.REACT_APP_URL}/users/signup`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email, password }),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       if (data.status === 'ok') {
  //         changeStatus();
  //         history.push('/');
  //       }
  //     });
  // };

  const  doFetch = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ password, email }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const json = await response.json();
      setExist(json.auth)
      if(json.auth) {
        sessionStorage.setItem('user', json.userid)
      }
      console.log(json);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

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
        {exist ? '' : <p>Такого пользователя не существует или вы ввели неверные данные :---O</p>}
        <button type='submit' className='button' onClick={doFetch}>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
