import React from "react";

const Navbar = ()=>{
    return(
        <div className="h-[60px] bg-white my-4 rounded-lg
        w-[361px] flex justify-center items-center gap-2
        text-xl  font-normal">
            
            <img src="logo.svg" alt="" />
            <h1>Firebase Contact App</h1>
            
        </div>
    )
}

export default Navbar;