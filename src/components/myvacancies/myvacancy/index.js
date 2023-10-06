'use client'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { deleteResume } from '@/app/store/slices/resumeSlice'
export default function MyVacancy ({item}) {
    const dispatch = useDispatch()
    return(<div className="card mtb4">
        <Link className="h3 link" href={`/vacancy/${item.id}`}>{item.name}</Link>
        <p>Создан {item.createdAt}</p>

        
        <span className='deleteResume' onClick={() => dispatch(deleteResume(item.id))}>Удалить</span>
    </div>)
}