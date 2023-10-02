import MyResume from "./myresume";
export default function MyResumes ({resumes}) {
    
    const showResumes = resumes.map(item => (<MyResume 
        item={item}
        key={item.id}
        />));
    return(<div>
        {showResumes}
    </div>)
}