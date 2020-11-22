import style from './style.module.css';

function Profile() {
  return (
    <div className={style.container}>
      <h3 className='text'>Имя:</h3>
      <p className='text'>Ваш рейтинг:</p>
    </div>
  );
}

export default Profile;
