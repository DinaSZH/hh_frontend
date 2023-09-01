import Header from '../../components/header'
import MyResumes from '@/components/myresumes'
export default function Resume() {
  return (
    <main>
      <Header/>
      <div className='container'>
        <div className='flex flex-ai-c flex-jc-sb ptb7'>
          <h1>Мои Резюме</h1>
          <button className='button button-secondary-bordered'>Создать резюме</button>
        </div> 
        <MyResumes/>
      </div>
    </main>
  )
}