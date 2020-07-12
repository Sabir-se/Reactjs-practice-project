import React from 'react';
import Card from "./Cards";
import Sdata from "./Sdata";


const ParaTwo = () =>{
    return (
        <Card
           key={Sdata[2].id}
           srcName={Sdata[2].srcName} 
           title={Sdata[2].title}
           paraTitle = {Sdata[2].paraTitle}/>
      );
};

export default ParaTwo;