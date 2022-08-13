import React from 'react';
import {Triangle} from 'react-loader-spinner';


const Loader = () => {
  return (
    <div style={{height:"calc(100vh-70px)", width:"100vw", display:"flex",justifyContent:"center", alignItems:"center", marginTop:"200px"}}>
        <Triangle
        height="80"
        width="80"
        radius="9"
        color='red'
        ariaLabel = 'three-dots-loading'     
    wrapperStyle
    wrapperClass
        />
    </div>
  )
}

export default Loader;