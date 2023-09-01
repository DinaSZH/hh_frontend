import Header from '../../components/header'
import MyResumes from '@/components/myresumes'
export default function ResumePage() {
  const resumes = [{
    position: "Менеджер отдела продаж",
    createdAt: "25.07.2023",
    stats: {
      views:0,
      applies:0,
      show:0
    }
  },
  {
    position: "Backend Developer",
    createdAt: "20.08.2023",
    stats: {
      views:100,
      applies:7,
      show:1000
    }
  },
  {
    position: "React developer",
    createdAt: "10.04.2023",
    stats: {
      views:4,
      applies:1,
      show:513
    }
  },
]
  return (
    <main>
      <Header/>
      <div className='container'>
        <div className='flex flex-ai-c flex-jc-sb ptb7'>
          <h1>Мои Резюме</h1>
          <button className='button button-secondary-bordered'>Создать резюме</button>
        </div> 
        <MyResumes resumes={resumes}/>
      </div>
    </main>
  )
}