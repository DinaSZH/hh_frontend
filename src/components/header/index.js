'use client'

import logo from '../../app/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '@/app/store/slices/authSlice'

export default function Header() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth)
    return(
        <header className="header">
            <div className="container">
                <div className="header-inner"> 
                    <div>
                        <Link href="/"><Image className='logo' src={logo} alt='logo'/></Link>
                        
                        <Link href="/resumes">Мои Резюме</Link>
                        <a>Помощь</a>
                    </div>

                    <div>
                        <button className="header-search"> 
                            Поиск
                        </button>
                        <Link href="/create-resume" className="header-button header-button--green">
                            Создать резюме
                        </Link>
                        {!isAuth && <Link href="/login" className="header-button" >
                            Войти
                        </Link>}
                        {isAuth && <a className="header-button" onClick={() => dispatch(logOut())}>
                            Выйти
                        </a>}
                    </div>
                </div>
            </div>
        </header>
    )
}