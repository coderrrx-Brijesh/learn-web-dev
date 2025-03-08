import React from 'react'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LogInForm'
import frameImage from '../assets/frame.png'
export const Template = ({title,desc1,desc2,image,formType,setFormType,setIsLoggedIn}) => {
  return (
    <div>
        <div>
            <h1>{title}</h1>
            <p>
                <span>{desc1}</span> <span>{desc2}</span>
            </p>
            {
                formType==="signup" ? (<SignUpForm setIsLoggedIn={setIsLoggedIn}/>): (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
            }
            <div>
                <div></div>
                <p>OR</p>
                <div></div>
            </div>
            <button>
                <p>Sign up with Google</p>
            </button>
        </div>
        <div>
            <img src={frameImage} alt="pattern" width={558} height={558}/>
            <img src={image} alt="student" width={520} height={520}/>
        </div>
    </div>
  )
}
