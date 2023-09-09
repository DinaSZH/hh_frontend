'use client';

import Header from '../../components/header'
import Input from '@/components/input';
import { END_POINT } from '@/config/end-point';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AutoCompleteSelect from '@/components/AutoCompleteSelect';

export default function CreateResume() {
    const [cities, setCities] = useState([]);
    useEffect(() => {
        console.log("didMount")
        axios.get(`${END_POINT}/api/region/cities`).then(res => {
            setCities(res.data);
        })
    }, [])

   console.log("rerender")
   const onSelect = (data) => {
    console.log("onSelect", data)
   }


  return (
    <main>
      <Header/>
      <div className='container ptb7'>
        <h1>Ваше резюме</h1>

        <h3>Контактные данные</h3>
        <Input placeholder="" type="text" label="Имя" size="fieldset-md" />
        <Input placeholder="" type="text" label="Фамилия" size="fieldset-md" />
        <Input placeholder="" type="text" label="Мобильный телефон" size="fieldset-md" />
        <AutoCompleteSelect placeholder="" type="text" label="Город проживания" size="fieldset-md" items={cities} onSelect={onSelect}/>

        <h3>Основная информация</h3>
        
      </div>
    </main>
  )
}

