'use client';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { deleteVacancy } from '@/app/store/slices/vacancySlice';
export default function MyVacancy ({item}) {
    
    const dispatch = useDispatch()

    const currentUser = useSelector(state => state.auth.currentUser)
    return (<div className="card mtb4">
        <Link className="h3 link" as={`/vacancy/${item.id}`} href="/vacancy/[id]">{item.name}</Link>
        <p> {item.salary_from && `от ${item.salary_from}`} {item.salary_to&& `до ${item.salary_to}`} {item.salary_type} </p>
        <p>Создан {item.createdAt}</p>
        {currentUser && item.userId === currentUser.id && <span className='deleteReume' onClick={() => dispatch(deleteVacancy(item.id))}>Удалить</span>}
    </div>)
}