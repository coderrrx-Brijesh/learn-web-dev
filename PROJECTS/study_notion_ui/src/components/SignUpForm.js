import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { toast, Toaster } from 'react-hot-toast';
import { Link, useNavigate} from 'react-router-dom';
export const SignUpForm = () => {
const navigate=useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value
    }));
  };

  const submitHandler = (event) => {
    if(formData.password !== formData.confirmPassword){
      toast.error('Passwords do not match');
      return;
    }
    event.preventDefault();
    console.log(formData);
    toast.success('Sign Up Successful');
    navigate('/login')
  };

  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>

      <form onSubmit={submitHandler}>
        <div className='name'>
          <label>
            <p>First Name<sup>*</sup></p>
            <input
              type='text'
              value={formData.firstName}
              placeholder='Enter First Name'
              required
              name='firstName'
              onChange={changeHandler}
            />
          </label>
          <label>
            <p>Last Name<sup>*</sup></p>
            <input
              type='text'
              value={formData.lastName}
              placeholder='Enter Last Name'
              required
              name='lastName'
              onChange={changeHandler}
            />
          </label>
        </div>
        <label>
          <p>Email Address<sup>*</sup></p>
          <input
            type='text'
            value={formData.email}
            placeholder='Enter Email Address'
            required
            name='email'
            onChange={changeHandler}
          />
        </label>
        <label>
          <p>Create Password<sup>*</sup></p>
          <input
            type={showPassword ? 'text' : 'password'}
            value={formData.password}
            placeholder='Enter Password'
            required
            name='password'
            onChange={changeHandler}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
        <label>
          <p>Confirm Password<sup>*</sup></p>
          <input
            type={showPassword ? 'text' : 'password'}
            value={formData.confirmPassword}
            placeholder='Enter Confirm Password'
            required
            name='confirmPassword'
            onChange={changeHandler}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
          <button>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
