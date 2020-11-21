import style from './style.module.css';

function Signin() {
  return (
    <div className={`${style.container}`}>
      <form className='form animate__animated animate__fadeIn'>
        <div className='input-clue text'>
          <p className='description-clue'>Введите имя</p>

          <input type='text' placeholder='Name' />
        </div>
        <div className='input-clue text'>
          <p className='description-clue'>Введите e-mail</p>

          <input type='email' placeholder='Email' />
        </div>
        <div className='input-clue text'>
          <p className='description-clue'>Введите пароль</p>

          <input type='password' placeholder='Password' />
        </div>
        <label
          className={`description-clue ${style['description-checkbox']} text`}
        >
          <input type='checkbox' required />
          <span>Я согласен на обработку персональных данных</span>
        </label>
        <button type='submit' className='button'>
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default Signin;
