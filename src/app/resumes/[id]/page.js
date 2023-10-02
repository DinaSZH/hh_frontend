'use client'
import Header from '@/components/header'
import MyResumes from '@/components/myresumes'
import Link from 'next/link'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getResumeById} from '@/app/store/slices/resumeSlice'
import { useParams } from 'next/navigation'

export default function ResumePage() {

    const dispatch = useDispatch();
    const {id} = useParams();
    const resume = useSelector(state => state.resume.resume)

    const didMount = () => {
        dispatch(getResumeById(id))
    }
    useEffect(didMount, [])

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