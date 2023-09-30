import MyResume from "./myresume";
export default function MyResumes ({resumes}) {
    
    const showResumes = resumes.map(item => (<MyResume 
        position={item.position}
        createdAt={item.createdAt}
        show={0}
        views={0}
        applies={0}
        key={item.id}
        />));
    return(<div>
        {showResumes}
    </div>)
}