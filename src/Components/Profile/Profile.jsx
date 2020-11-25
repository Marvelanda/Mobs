import CheckUserPlace from '../CheckUserPlace/CheckUserPlace';
import style from './style.module.css';
import ProgressBar from '../ProgressBar/ProgressBarNpm'
import 'semantic-ui-css/semantic.min.css'
import ProgressBarCopy from '../ProgressBar/ProgressBar'

function Profile() {
  return (
    <div className={style.container}>
      <h3 className='text'>Доступные локации:</h3>
      <ul></ul>
      
      <h3 className='text'>Имя:</h3>
      <p className='text'>Ваш рейтинг:</p>
    </div>
  );
}

export default Profile;
