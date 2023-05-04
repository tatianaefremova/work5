import React from 'react'
import { useForm } from "react-hook-form";
import "../App.css"
import 'leaflet/dist/leaflet.css'
import {MapContainer, Marker, Popup, TileLayer, Tooltip, CircleMarker} from 'react-leaflet'
import axios from 'axios';

const center=[59.934356, 30.326258]

const Form = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
    alert('Заявка отправлена')
    console.log(data)
  };

  console.log(watch("example"));
  return (
  <div class='form'>
    <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Заполните заявку на обратную связь</h1>
        <div className='input=-group-mb-3'>
          <input
          {...register('lastName', {
            required: true,
            maxLength: 50,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Фамилия'/>
        </div>
        {errors?.lastName?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.lastName?.type === 'maxLength'&&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.lastName?.type === 'pattern'&&(
          <p>Поле заполнено некорректно</p>
        )}
        <br/>
        <div className='input=-group-mb-3'>
          <input
          {...register('firstName', {
            required: true,
            maxLength: 50,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Имя'/>
        </div>
        {errors?.firstName?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.firstName?.type === 'maxLength'&&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.firstName?.type === 'pattern'&&(
          <p>Поле заполнено некорректно</p>
        )}
        <br/>
        <div className='input=-group-mb-3'>
          <input
          {...register('patronymic', {
            required: true,
            maxLength: 50,
            pattern: /^[А-Яа-я]+$/i
          })}
          type='text'
          className='form-control'
          placeholder='Отчество'/>
        </div>
        {errors?.patronymic?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.patronymic?.type === 'maxLength'&&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.patronymic?.type === 'pattern'&&(
          <p>Поле заполнено некорректно</p>
        )}
        <br/>
         <div className='input=-group-mb-3'>
          <input
          {...register('email', {
            required: true,
            maxLength: 50,
            pattern: /^[A-Za-z0-9_.-]+$/i
          })}
          type='email'
          className='form-control'
          placeholder='Email'/>
        </div>
        {errors?.email?.type === 'required'&&(
          <p>Поле обязательно для заполнения</p>
        )}
        {errors?.email?.type === 'maxLength'&&(
          <p>Поле не может содержать более 50 символов</p>
        )}
        {errors?.email?.type === 'pattern'&&(
          <p>Поле заполнено некорректно</p>
        )}
      <br/>
      <input className='btn btn-outline-primary'type="submit" />
    </form>
    <br/>
   
    <MapContainer
      center={center}
      zoom={10}
      style={{
        width:'100vw',
        height:'500px'
      }}
      >
      <TileLayer
      url='https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=baBC3t9J46G3egoyg6Rg'
      attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

<CircleMarker
            center={center}
            pathOptions={{color:'black'}}
            radius={10}
            />

           <Marker position={center}>
            <Popup>
                Мы находимся здесь 
            </Popup>
            <Tooltip>Приходите</Tooltip>
           </Marker>
    </MapContainer>
  </div>
  )
}

export default Form