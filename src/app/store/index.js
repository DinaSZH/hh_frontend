import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import resumeReducer from './slices/resumeSlice'
import vacancyReducer from './slices/vacancySlice'
export default configureStore({
  reducer: {
    auth: authReducer,
    resume: resumeReducer,
    vacancy: vacancyReducer
  },
})