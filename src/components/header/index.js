'use client'

import logo from '../../app/images/logo.png'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header-inner"> 
                    <div>
                        <Link href="/"><Image className='logo' src={logo}/></Link>
                        
                        <Link href="/resumes">Мои Резюме</Link>
                        <a>Помощь</a>
                    </div>

                    <div>
                        <button className="header-search"> 
                            <Image/>
                            Поиск
                        </button>
                        <Link href="/create-resume" className="header-button header-button--green">
                            Создать резюме
                        </Link>
                        <Link href="/login" className="header-button" >
                            Войти
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}