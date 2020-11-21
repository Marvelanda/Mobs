import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewPlaceSaga } from '../../redux/features/Places/placeSlice';
import style from './style.module.css'

function AdminPanel() {

  const [placeName, setPlaceName] = useState('')
  const [urlName, setUrlName] = useState('')
  const [placePhotoUrl, setPhotoUrl] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [workingHours, setWorkingHours] = useState('')
  const [category, setCategory] = useState('')
  const [rating, setRating] = useState('')
  const [geometry, setGeometry] = useState('')
  const [description, setDescription] = useState('')

  const handlerName = (e) => {
    setPlaceName(e.target.value);
  };
  const handlerUrlName = (e) => {
    setUrlName(e.target.value);
  };
  const handlerPhotoUrl = (e) => {
    setPhotoUrl(e.target.value);
  };
  const handlerAddress = (e) => {
    setAddress(e.target.value);
  };
  const handlerPhone = (e) => {
    setPhone(e.target.value);
  };
  const handlerWorkingHours = (e) => {
    setWorkingHours(e.target.value);
  };
  const handlerCategory = (e) => {
    setCategory(e.target.value);
  };
  const handlerRating = (e) => {
    setRating(e.target.value);
  };
  const handlerGeometry = (e) => {
    setGeometry(e.target.value);
  };
  const handlerDescription = (e) => {
    setDescription(e.target.value);
  };

  const dispatch = useDispatch();

  const addPlace = (e) => {
    e.preventDefault();
    dispatch(addNewPlaceSaga(placeName, urlName, placePhotoUrl, address, phone, workingHours, category, rating, geometry, description));
    setPlaceName('');
    setUrlName('');
    setPhotoUrl('');
    setAddress('');
    setPhone('');
    setWorkingHours('');
    setCategory('');
    setRating('');
    setGeometry('');
    setDescription('');
  };

  return (
    <div className={style.container}>
      <form onSubmit={addPlace} className={style.form}>
        <h2>Добавить новое заведение</h2>
        <p>Название</p>
        <input type="text" placeholder='Название' required onChange={handlerName} value={placeName}/>
        <p>Сайт</p>
        <input type="text" placeholder='url' onChange={handlerUrlName} value={urlName} />
        <p>Фото</p>
        <input type="text" placeholder='url' onChange={handlerPhotoUrl} value={placePhotoUrl} />
        <p>Контакты</p>
        <input type="text" placeholder='адресс' required onChange={handlerAddress} value={address} />
        <input type="text" placeholder='телефон' onChange={handlerPhone} value={phone} />
        <input type="text" placeholder='часы работы' onChange={handlerWorkingHours} value={workingHours} />
        <p>Категория</p>
        <input type="text" placeholder='категория' required onChange={handlerCategory} value={category} />
        <p>Рейтинг</p>
        <input type="text" placeholder='рейтинг' onChange={handlerRating} value={rating} />
        <p>Координаты</p>
        <input type="text" placeholder='координаты' required onChange={handlerGeometry} value={geometry} />
        <p>Описание</p>
        <input type="text" placeholder='Описание' className={style.description} onChange={handlerDescription} value={description} />
        <input type="submit" value="Добавить"/>
      </form>
    </div>
  )
}

export default AdminPanel
