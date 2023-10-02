import Link from 'next/link'

export default function MyResume ({item}) {
    return(<div className="card mtb4">
        <Link className="h3 link" href={`/resumes/${item.id}`}>{item.position}</Link>
        <p>Создан {item.createdAt}</p>

        <h3>Статистика</h3>
        <div className="flex">
            <a className="p3">{item.show} показов</a>
            <a className="p3">{item.views} просмотров</a>
            <a className="p3">{item.applies}  приглашений</a>
        </div>
    </div>)
}