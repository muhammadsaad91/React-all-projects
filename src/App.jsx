import React, { useState } from "react";
import Data from './Data'
import Buton from './Buton'


const App = () => {


    return (
        <>
<h1>My All Projects on React js </h1>
<h2>(Muhammad SaAd)</h2>
<div className="card">
     
       {Data.map((value)=>{
    return(
        <Buton name={value.name}
        link={value.link} />
    );
})}
    </div>
        </>
    );
};
// console.log(narr)

export default App;