export default function MyResume ({position, createdAt, show, views, applies}) {
    return(<div className="card mtb4">
        <a className="h3">{position}</a>
        <p>Создан {createdAt}</p>

        <h3>Статистика</h3>
        <div className="flex">
            <a className="p3">{show} показов</a>
            <a className="p3">{views} просмотров</a>
            <a className="p3">{applies}  приглашений</a>
        </div>
    </div>)
}