import React from "react";
import { Outlet } from "react-router-dom";
const MainHandler=()=>{
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default MainHandler