import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    function routeChangeHandler() {
        navigate("/Activity");
    }
    function backHandler() {
        navigate(-1); 
    }

    return (
        <div>
            <div>
                This is the home page
            </div>
            <button onClick={routeChangeHandler}>Go to Activity</button>
            <button onClick={backHandler}>Go Back</button>
        </div>
    );
}

export default Home;
