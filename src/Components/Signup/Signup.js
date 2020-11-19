import { useState } from 'react';
import style from './style.module.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const emailHandler = (evt) => {
    setEmail(evt.target.value);
  };

  const passwordHandler = (evt) => {
    setPassword(evt.target.value);
  };

  return (
    <div className='d-flex justify-content-center mt-5'>
      <form className='d-flex flex-column align-items-center'>
        <p>Please enter your email</p>
        <div className='form-group'>
          <input
            onChange={emailHandler}
            type='email'
            value={email}
            placeholder='Email address'
            name='email'
            className='form-control'
          />
        </div>
        <p>Please enter your password</p>
        <div className='form-group'>
          <input
            onChange={passwordHandler}
            type='password'
            value={password}
            placeholder='Password'
            name='password'
            className='form-control'
          />
        </div>
        <button type='submit' className='btn btn-primary'>
          Sign up
        </button>
      </form>
    </div>
  );
}

export default Signup;
