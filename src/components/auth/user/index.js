'use client'
import { useEffect, useState} from "react"
import { useSelector, useDispatch } from 'react-redux'
import { authorize, sendVerificationEmail, verifyCode } from "@/app/store/slices/authSlice"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function UserLogin() {
    const [step, setStep] = useState(1)
    const [email, setEmail] = useState("")
    const [time, setTime] = useState(119)
    const [code, setCode] = useState("")
    const router = useRouter()
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth)

    const sendVerifyEmail = () => {
        dispatch(sendVerificationEmail(email))
        setStep(2)
    }

    const verifyCodeFunc = () => {
        dispatch(verifyCode(email, code))
    }

    useEffect(() => {
        let interval;
        if(step === 2) {
            interval = setInterval(()=> {
               if(time !== 0) {setTime(time => time -1) }
            }, 1000)
        } else if(interval) {
            clearInterval(interval)
        }
    }, [step])

    useEffect(() => {
        if(isAuth){
            router.push("/resumes")
        }
    }, [isAuth])

    const min = parseInt(time/60) 
    const sec = time % 60

    return(
        <section className="login-page">
            {isAuth ? "True" : "False"}
            {step === 1 && <div className="card">
                <h1>Поиск работы</h1>
                <form>
                    <input className="input" placeholder="Введите email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <button className="button button-primary" onClick={sendVerifyEmail}>Продолжить</button>
                </form>
            </div>}
            
            {step === 1 &&  <div className="card">
                <h1>Поиск сотрудников</h1>

                <p>Размещение вакансий и доступ к базе резюме</p>
                <Link className="button button-primary-bordered" href="/employer/signin">Я ищу сотрудников</Link>
            </div>}
           
            {step === 2 &&
            <div className="card">
                <h1>Отправили код на ...</h1>
                <p>Напишите его, чтобы подтвердить что это вы, а не кто то другой</p>
                <form>
                    <input className="input" placeholder="Введите код" value={code} onChange={(e) => setCode(e.target.value)}/>
                    <p>Повторить можно через {min}:{sec}</p>
                    <button className="button button-primary" type="button" onClick={verifyCodeFunc}>Продолжить</button>
                    <button className="button button-primary-bordered" onClick={()=>setStep(1)}>Назад</button>
                </form>
            </div>}

            {step === 3 &&
            <div className="card">
                <h1>Давайте познакомимся</h1>
                <form>
                    <input className="input" placeholder="Имя"/>
                    <input className="input" placeholder=" Фамилия"/>
                    <button className="button button-primary" type="button" onClick={() => dispatch(authorize())}>Продолжить</button>
                    <button className="button button-primary-bordered" onClick={()=>setStep(2)}>Назад</button>
                </form>
            </div>}
        </section>
    )
}