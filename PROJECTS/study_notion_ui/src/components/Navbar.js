import React from "react";
import {Link} from "react-router-dom"
import logo from '../assets/Logo.svg';
import { toast, Toaster } from "react-hot-toast";
const Navbar = (props) => {
    const isLoggedIn = props.isLoggedIn
    const setIsLoggedIn = props.setIsLoggedIn
    return (
        <div className='flex justify-between items-center p-4'>
            <Link to="/">
                <img src={logo} alt="Notion Logo" width={160} height={32}/>
            </Link>
            <nav>
                <ul className="flex gap-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>

            <div className="flex gap-4">
                { !isLoggedIn &&
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                }
                { !isLoggedIn &&
                    <Link to="/signup">
                        <button>Sign Up</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/logout">
                        <button
                        onClick={() => {
                            setIsLoggedIn(false)
                            toast.success("Log Out Successful");
                        }
                            }>Log Out</button>
                    </Link>
                }
                { isLoggedIn &&
                    <Link to="/dashboard">
                        <button>Dash Board</button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar