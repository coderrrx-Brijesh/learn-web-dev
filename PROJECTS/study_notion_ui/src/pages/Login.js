import React from 'react'
import { Template } from '../components/Template'
import loginImg from '../assets/login.png'
export const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn
  return (
    <Template
    title="Join the millions learning to code today! with StudyNotion."
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    formType="login"
    setIsLoggedIn={setIsLoggedIn}
    image={loginImg}
    />
  )
}

export default Login
