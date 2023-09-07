'use client';

import Header from '../../components/header'
import Input from '@/components/input';
import { END_POINT } from '@/config/end-point';
import axios from 'axios';

export default function CreateResume() {

    axios.get(`${END_POINT}/api/region/cities`).then(res => {
        console.log(res)
    })


  return (
    <main>
      <Header/>
      <div className='container ptb7'>
        <h1>Ваше резюме</h1>

        <h3>Контактные данные</h3>
        <Input placeholder="" type="text" label="Имя" size="fieldset-md" />
        <Input placeholder="" type="text" label="Фамилия" size="fieldset-md" />
        <Input placeholder="" type="text" label="Мобильный телефон" size="fieldset-md" />
      </div>
    </main>
  )
}