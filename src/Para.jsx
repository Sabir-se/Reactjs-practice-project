import React from 'react';
import Card from "./Cards";
import Sdata from "./Sdata";


const Para = () =>{
    return (
        <Card
           key={Sdata[1].id}
           srcName={Sdata[1].srcName} 
           title={Sdata[1].title}
           paraTitle = {Sdata[1].paraTitle}/>
      );
};

export default Para;