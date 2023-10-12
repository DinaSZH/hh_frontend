'use client'

import logo from '../../app/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { logOut, authorize} from '@/app/store/slices/authSlice'
import { useEffect } from 'react'
import jwt_decode from 'jwt-decode'
import { useRouter } from 'next/navigation'

export default function Header() {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth)
    const currentUser = useSelector((state) => state.auth.currentUser)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token) {
            let decodedToken = jwt_decode(token)
            if(decodedToken.exp * 1000 > Date.now()) {
                dispatch(authorize({token}))
            } else {
                localStorage.removeItem("token")
            }
        }

    }, [])


    return(
        <header className="header">
            <div className="container">
                <div className="header-inner"> 
                    <div>
                        <Link href="/"><Image className='logo' src={logo} alt='logo'/></Link>
                        
                        {currentUser && currentUser.role && currentUser.role.name ==="manager" &&
                        <Link href="/vacancy">Мои вакансии</Link>}

                        {currentUser && currentUser.role && currentUser.role.name !=="manager" &&
                        <Link href="/resumes">Мои Резюме</Link>}
                         {currentUser && currentUser.role && currentUser.role.name !== "manager" && <Link href="/applies">Отклики</Link>}
                        <a>Помощь</a>
                    </div>

                    <div>
                        <Link className="header-search" href="/search/vacancy/advanced">
                            {/* <Image src={searchIcon} alt="icon"/> */}
                            Поиск
                        </Link>

                        {currentUser && currentUser.role && currentUser.role.name ==="manager" &&
                        <Link href="/create-vacancy" className="header-button header-button--green">
                        Создать вакансию
                    </Link>}

                        {currentUser && currentUser.role && currentUser.role.name !=="manager" &&
                        <Link href="/create-resume" className="header-button header-button--green">
                        Создать резюме
                    </Link>}

                        
                        {!isAuth && <Link href="/login" className="header-button" >
                            Войти
                        </Link>}
                        {isAuth && <a className="header-button" onClick={() => dispatch(logOut(router))}>
                            Выйти
                        </a>}
                    </div>
                </div>
            </div>
        </header>
    )
}