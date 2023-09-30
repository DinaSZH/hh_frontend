import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import resumeReducer from './slices/resumeSlice'
export default configureStore({
  reducer: {
    auth: authReducer,
    resume: resumeReducer
  },
})