import React from 'react'
import { Template } from '../components/Template'
import signupImg from '../assets/signup.png'
export const SignUp = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn
  return (
    <Template
    title="Join the millions learning to code today! with StudyNotion."
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    formType="signup"
    setIsLoggedIn={setIsLoggedIn}
    image={signupImg}/>
  )
}

export default SignUp