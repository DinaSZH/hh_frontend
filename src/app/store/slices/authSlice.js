import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import jwt_decode from "jwt-decode";


import { END_POINT } from '@/config/end-point'

let initialState=  {
  isAuth:false,
  currentUser: null,
  tokenExt: 0,
  error: null
}




export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
      localStorage.setItem("token", action.payload.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`
      const decoded = jwt_decode(action.payload.token);
        state.currentUser = {
          id: decoded.id,
          email: decoded.email,
          full_name: decoded.full_name,
          phone: decoded.phone,
          role: decoded.role,
        }
      state.isAuth = true
      state.tokenExt = decoded.exp
    },
    logOut: (state, action) => {
      const role = {...state.currentUser.role}
      state.isAuth = false

      state.currentUser = null;
      state.exp = 0;
      localStorage.removeItem("token")

      if(role.name === "employee") {
        action.payload.push("/login")
      } else {
        action.payload.push("/employer/signin")
      }
    },
    setError: (state, action) => {
      state.error = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { authorize, logOut, setError} = authSlice.actions

export const sendVerificationEmail = (email) => (dispatch) => {
      axios.post(`${END_POINT}/api/auth/sendmail` , {
        email
      })
}

export const verifyCode = (email, code) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/verifycode`, {
    email,
    code
  }).then(res => {
    dispatch(authorize(res.data))
  })
}

export const signUp = (data, router) => (dispatch) => {
  const fd = new FormData();
  fd.append("full_name", data.full_name)
  fd.append("email", data.email)
  fd.append("password", data.password)
  fd.append("password2", data.password2)
  fd.append("company_name", data.company_name)
  fd.append("company_description", data.company_description)
  fd.append("company_address", data.company_address)
  fd.append("company_logo", data.company_logo)


  axios.post(`${END_POINT}/api/auth/signup`, fd).then(res => {
    router.push("/employer/signin")
  }).catch(e => {
    console.log(e)
    dispatch(setError(e.response.data))
  })
}

export const signIn = (data, router) => (dispatch)=> {
  axios.post(`${END_POINT}/api/auth/login`, data).then(res => {
    dispatch(authorize(res.data))
    router.push("/vacancy")
  }).catch(e => {
    console.log(e)
    if(e.response && e.response.data)
    dispatch(setError(e.response.data))
  })
}

export default authSlice.reducer