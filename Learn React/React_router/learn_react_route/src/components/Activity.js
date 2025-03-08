import React from "react";
import { useNavigate } from 'react-router-dom';

function Activity (){
    const navigate = useNavigate();
    function backHandler() {
        navigate(-1); 
    }
    return (
        <div>
            <div>
            This is Activity page
        </div>
        <button onClick={backHandler}>Go Back</button>
        </div>
    )
}

export default Activity; 