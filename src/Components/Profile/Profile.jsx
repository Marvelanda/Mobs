import CheckUserPlace from '../CheckUserPlace/CheckUserPlace';
import style from './style.module.css';

function Profile() {
  return (
    <div className={style.container}>
      <h3 className='text'>Доступные локации:</h3>
      <ul></ul>
      <CheckUserPlace />
    </div>
  );
}

export default Profile;
