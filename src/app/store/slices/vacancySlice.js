import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'


export const vacancySlice = createSlice({
  name: 'vacancy',
  initialState: {
    vacancies: [],
    vacancy: {}, 
    specializations: [],
    cities: [],
    experiences: [],
    skills: [],
    empTypes: [],
  },
  reducers: {
    setMyVacancies: (state, action) => {
      state.vacancies =  action.payload.vacancies
    },
    setVacancy: (state, action) => {
      state.vacancy = action.payload.vacancy
    },
    handleDeleteVacancy: (state, action) => {
      let vacancies = [...state.vacancies]
      vacancies = vacancies.filter(item => item.id !== action.payload)
      state.vacancies = vacancies
    },
    setSpecializations: (state, action) => {
      state.specializations = action.payload
    },
    setCities: (state, action) => {
      state.cities = action.payload
  },
  setExps: (state, action) => {
      state.experiences = action.payload
  },
  setSkills: (state, action) => {
      state.skills = action.payload
  },
  setEmpType: (state, action) => {
      state.empTypes = action.payload
  }
  },
})

// Action creators are generated for each case reducer function
export const { setMyVacancies, setVacancy, handleDeleteVacancy, setSpecializations, setCities, setExps, setSkills, setEmpType} = vacancySlice.actions

export const getMyVacancies = () => async (dispatch) => {
  try{
    const res = await axios.get(`${END_POINT}/api/vacancy`);
    dispatch(setMyVacancies({vacancies: res.data}))
  } catch(e) {
    alert("Что то пошло не так, сообщите об ошибке Тех спецам сайта!")
  }  
}

export const getSpecializations = () => async (dispatch) => {
  try{
    const res = await axios.get(`${END_POINT}/api/specializations`);
    dispatch(setSpecializations(res.data))
  } catch(e) {
    alert("Что то пошло не так, сообщите об ошибке Тех спецам сайта!")
  }  
}

export const getCities= () => async (dispatch) => {
    
  try {
     const res = await axios.get(`${END_POINT}/api/region/cities`);
     dispatch(setCities(res.data))
  }catch(e) {
     alert("Что то пошло не так, сообщите о ошибке Тех спецам сайта!")
  }
 
}

export const getExperiences= () => async (dispatch) => {
    
  try {
     const res = await axios.get(`${END_POINT}/api/experiences`);
     dispatch(setExps(res.data))
  }catch(e) {
     alert("Что то пошло не так, сообщите о ошибке Тех спецам сайта!")
  }
 
}


export const getSkills= () => async (dispatch) => {
  
  try {
     const res = await axios.get(`${END_POINT}/api/skills`);
     dispatch(setSkills(res.data))
  }catch(e) {
     alert("Что то пошло не так, сообщите о ошибке Тех спецам сайта!")
  }
 
}

export const getEmpType= () => async (dispatch) => {
  
  try {
     const res = await axios.get(`${END_POINT}/api/employment-types`);
     dispatch(setEmpType(res.data))
  }catch(e) {
     alert("Что то пошло не так, сообщите о ошибке Тех спецам сайта!")
  }
 
}

export const createVacancy = (sendData, router) => async (dispatch) => {
  try {
      const res = await axios.post(`${END_POINT}/api/vacancy`, sendData);
      router.push("/vacancy")
   }catch(e) {
      console.log(e)
      alert("Что то пошло не так, сообщите о ошибке Тех спецам сайта!")
   }
}

export const deleteVacancy = (id) => async (dispatch) => {
  try {
      const res = await axios.delete(`${END_POINT}/api/vacancy/${id}`);
      dispatch(handleDeleteVacancy(id))
      
   }catch(e) {
      console.log(e)
      alert("Что то пошло не так, сообщите о ошибке Тех спецам сайта!")
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