import React from "react";

const Navigation=({onFormClick})=>{
    return(
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=>onFormClick('signin')} className='f3 dim link black underline pa3 pointer'>Sign-out</p>
        </nav>
        
    )
};
export default Navigation;