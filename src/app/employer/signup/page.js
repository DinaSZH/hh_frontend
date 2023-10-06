
'use client'
import UserLogin from '@/components/auth/user/index';
import Image from 'next/image';
import logo from '@/app/images/logo.png'
import { useEffect, useState } from 'react';
import { signUp , setError} from '@/app/store/slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/navigation"
export default function EmployerSignup() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState(1);
  const [first_name, setName] = useState("");
  const [last_name, setLastName] = useState("");
  const [company_name, setCompanyName] = useState("");
  const [company_description, setCompanyDesc] = useState("");
  const [company_address, setCompanyAdr] = useState("");
  const [password, setPassoword] = useState("");
  const [password2, setPassoword2] = useState("");
  const [company_logo, setCompnanyLogo] = useState("");

  const router = useRouter();

  const dispatch = useDispatch()
  const error = useSelector ((state) => (state.auth.error))
  useEffect(() => {
    return () => {
      dispatch(setError(null))
    }
  }, [])

  const onLogoChange = (e) => {
    setCompnanyLogo(e.target.files[0])
  }

  const handleSignup = () => {
    dispatch(signUp({
      email,
      full_name: `${first_name} ${last_name}`,
      company_name,
      company_description,
      company_address,
      company_logo,
      password,
      password2
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
          {step === 1 && <div className="card">
                <h1>Регистрация для поиска сотрудников</h1>
                <p>В завершении на почту придёт пароль</p>
                <form>
                    <input className="input" placeholder="Введите email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <button className="button button-primary" onClick={()=>setStep(2)}>Продолжить</button>
                </form>
                {error && Object.keys(error).map(key => (<p className='error'>{error[key]}</p>))}
            </div>}

            {step === 2 &&
            <div className="card">
                <h1>Как вас зовут?</h1>
                <form>
                    <input className="input" placeholder="Имя" value={first_name} onChange={(e) => setName(e.target.value)}/>
                    <input className="input" placeholder="Фамилия" value={last_name} onChange={(e) => setLastName(e.target.value)}/>
                    <button className="button button-primary" type="button" onClick={()=>setStep(3)}>Продолжить</button>
                    <button className="button button-primary-bordered" onClick={()=>setStep(1)}>Назад</button>
                </form>
                {error && Object.keys(error).map(key => (<p className='error'>{error[key]}</p>))}
            </div>}

            {step === 3 &&
            <div className="card">
                <h1>Введите название компании?</h1>
                <form>
                    <input className="input" placeholder="Название компании" value={company_name} onChange={(e) => setCompanyName(e.target.value)}/>
                    <textarea className="textarea" placeholder="Описание компании" value={company_description} onChange={(e) => setCompanyDesc(e.target.value)}/>
                    <input className="input" placeholder="Адрес компании" value={company_address} onChange={(e) => setCompanyAdr(e.target.value)}/>
                    <input className="input" type='file' placeholder="Logo компании" onChange={onLogoChange}/>

                    <button className="button button-primary" type="button" onClick={()=>setStep(4)}>Продолжить</button>
                    <button className="button button-primary-bordered" onClick={()=>setStep(2)}>Назад</button>
                </form>
                {error && Object.keys(error).map(key => (<p className='error'>{error[key]}</p>))}
            </div>}

            {step === 4 &&
            <div className="card">
                <h1>Введите пароль</h1>
                <form>
                    <input className="input" type='password' placeholder="Введите пароль" value={password} onChange={(e) => setPassoword(e.target.value)}/>
                    <input className="input" type='password' placeholder="Повторите пароль" value={password2} onChange={(e) => setPassoword2(e.target.value)}/>
              
                    <button className="button button-primary" type="button" onClick={handleSignup}>Зарегестрироваться</button>
                    <button className="button button-primary-bordered" onClick={()=>setStep(3)}>Назад</button>
                </form>
                {error && Object.keys(error).map(key => (<p className='error' key={key}>{error[key]}</p>))}
            </div>}

          
            </section>
        </div>
    </main>
  )
}
