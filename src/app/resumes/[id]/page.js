'use client'
import Header from '@/components/header'
import MyResumes from '@/components/myresumes'
import Link from 'next/link'

export default function ResumePage() {

  return (
    <main>
      <Header/>
      <div className='container'>
        <div className='flex flex-ai-c flex-jc-sb ptb7'>
          <Link href="/resumes" className='link'>К списку резюме</Link>
          <Link className='button button-secondary-bordered' href="/edit-resume">Редактировать</Link>
        </div> 
      </div>
    </main>
  )
}