import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { END_POINT } from '@/config/end-point'


export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    resumes: []
  },
  reducers: {
    setMyResumes: (state, action) => {
      state.resumes =  action.payload.resumes
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMyResumes } = resumeSlice.actions

export const getMyResumes = () => async (dispatch) => {
  try{
    const res = await axios.get(`${END_POINT}/api/resume`);
    dispatch(setMyResumes({resumes: res.data}))
  } catch(e) {
    alert("Что то пошло не так, сообщите об ошибке Тех спецам сайта!")
  }
      
}


export default resumeSlice.reducer 