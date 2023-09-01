import MyResume from "./myresume";
export default function MyResumes () {
    const resumes = [1, 2, 3, 4, 5]
    const showResumes = resumes.map(item => (<MyResume/>));
    return(<div>
        {showResumes}
    </div>)
}