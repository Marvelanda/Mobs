import style from './style.module.css';

function Signin() {
  return (
    <div className={style.container}>
      <form className={style.form}>
        <div className={style['input-clue']}>
          <p className={style['description-clue']}>Введите имя</p>

          <input type='text' placeholder='Name' />
        </div>
        <div className={style['input-clue']}>
          <p className={style['description-clue']}>Введите e-mail</p>

          <input type='email' placeholder='Email' />
        </div>
        <div className={style['input-clue']}>
          <p className={style['description-clue']}>Введите пароль</p>

          <input type='password' placeholder='Password' />
        </div>
        <label
          className={`${style['description-clue']} ${style['description-checkbox']}`}
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
