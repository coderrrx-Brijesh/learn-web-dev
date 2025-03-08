import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { toast } from "react-hot-toast";

const LogInForm = (props) => {
    const setIsLoggedIn = props.setIsLoggedIn;
    const navigate = useNavigate(); // For navigation after login
    const [showPassword, setShowPassword] = React.useState(false);
    const [FormData, setFormData] = React.useState({
        email: "",
        password: "",
    });

    const changeHandler = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(FormData);
        setIsLoggedIn(true);
        toast.success("Login Successful");
        navigate('/dashboard'); // Navigate to the dashboard after login
    };

    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address <sup>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={FormData.email}
                    onChange={changeHandler}
                    placeholder='Enter your email'
                    name="email"
                />
            </label>
            <label>
                <p>
                    Password <sup>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={FormData.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name="password"
                />
                <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)}
                </span>

                <Link to="/forgot-password">Forgot Password?</Link>
            </label>
            <button type="submit">Log In</button>
        </form>
    );
};

export default LogInForm;
