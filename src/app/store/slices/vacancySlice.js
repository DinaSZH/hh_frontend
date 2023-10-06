import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'


export const vacancySlice = createSlice({
  name: 'resume',
  initialState: {
    vacancies: [],
    vacancy: {}
  },
  reducers: {
    setMyVacancies: (state, action) => {
      state.vacancies =  action.payload.vacancies
    },
    uppendVacancy: (state, action) => {
      state.vacancies = [...state.vacancies, action.payload.newvacancy]
    },
    setVacancy: (state, action) => {
      state.vacancy = action.payload.vacancy
    },
    handleDeleteVacancy: (state, action) => {
      let vacancies = [...state.vacancies]
      vacancies = vacancies.filter(item => item.id !== action.payload)
      state.vacancies = vacancies
    }
  },
})

// Action creators are generated for each case reducer function
export const { setMyVacancies, uppendVacancy, setVacancy, handleDeleteVacancy} = vacancySlice.actions

export const getMyVacancies = () => async (dispatch) => {
  try{
    const res = await axios.get(`${END_POINT}/api/vacancy`);
    dispatch(setMyVacancies({vacancies: res.data}))
  } catch(e) {
    alert("Что то пошло не так, сообщите об ошибке Тех спецам сайта!")
  }  
}

// export const getResumeById = (id) => async (dispatch) => {
//   try{
//     const res = await axios.get(`${END_POINT}/api/resume/${id}`);
//     dispatch(setResume({resume: res.data}))
//   } catch(e) {
//     alert("Что то пошло не так, сообщите об ошибке Тех спецам сайта!")
//   }  
// }

// export const createResume = (sendData, router) => async (dispatch) => {
//   try{
//     const res = await axios.post(`${END_POINT}/api/resume`, sendData);
//     router.push("/resumes")
//     dispatch(uppendResume({newresume: res.data}))
//   } catch(e) {

//     alert("Что то пошло не так, сообщите об ошибке Тех спецам сайта!")
//   }
      
// }

// export const editResume = (sendData, router) => async (dispatch) => {
//   try{
//     const res = await axios.put(`${END_POINT}/api/resume`, sendData);
//     router.push("/resumes")
//   } catch(e) {

//     alert("Что то пошло не так, сообщите об ошибке Тех спецам сайта!")
//   }   
// }

// export const deleteResume = (id) => async (dispatch) => {
//   try{
//     const res = await axios.delete(`${END_POINT}/api/resume/${id}`);
//     dispatch(handleDeleteResume(id))
//   } catch(e) {

//     alert("Что то пошло не так, сообщите об ошибке Тех спецам сайта!")
//   }   
// }


export default vacancySlice.reducer 