import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <div className="p-4 bg-gray-300">
       
            <ul className="flex justify-between">
                <li><Link to="/">Text To Speech</Link></li>
                <li><Link to="/totext">Speech to Text</Link></li>
            </ul>
        </div>
    )
}
export default Navbar