
'use client'
import UserLogin from '@/components/auth/user/index';
import Image from 'next/image';
import logo from '@/app/images/logo.png'
import { useEffect, useState } from 'react';
import { setError, signIn} from '@/app/store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function EmployerSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter()

  const dispatch = useDispatch()
  const error = useSelector ((state) => (state.auth.error))
  useEffect(() => {
    return () => {
      dispatch(setError(null))
    }
  }, [])

  

  const handleSignin = () => {
   dispatch(signIn({
    email,
    password
   }, router))
  }

  return (
    <main className='bg'>
        <div className='container'>
          <div className='auth-header'>
          <Image className='logo' src={logo} alt='logo'/>
              <p>Ответим на ваши вопросы</p>
              <a href='tel:77273121212'>+7 7727 312 12 12</a>
          </div>

          <section className="login-page">
          <div className="card">
                <h1>Вход для поиска сотрудников</h1>
                <form>
                    <input className="input" placeholder="Введите email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <input className="input" type='password' placeholder="Введите пароль" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="button button-primary" onClick={handleSignin} type="button">Войти</button>
                </form>
                {error && Object.keys(error).map(key => (<p className='error' key={key}>{error[key]}</p>))}
            </div>


          
            </section>
        </div>
    </main>
  )
}
