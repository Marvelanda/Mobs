import style from './style.module.css';

function DetailedPlace() {
  return (
    <div className={style.section}>
      <div className={style.container}>
        <div className={style.items}></div>
        <div className={style.items}></div>
        <div className={style.items}></div>
      </div>
      <div className={style.container}>
        <div className={style.items}></div>
        <div className={style.items}></div>
        <div className={style.items}></div>
      </div>
      <div className={style.container}>
        <div className={style.items}></div>
        <div className={style.items}></div>
      </div>
      <div className={style.container}>
        <div className={style.items}>
          <div></div>
          <div></div>
        </div>
        <div className={style.items}></div>
      </div>
    </div>
  );
}

export default DetailedPlace;
