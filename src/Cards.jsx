import React from "react";
import Images from "./Images";

function Card(props){
    return(<>
      <div class="card">
       <Images srcName={props.srcName} />
       <h2>{props.title}</h2>
       <p>{props.paraTitle}</p>
       <a href="https://goldario.com">
       <button class="btn">Watch Now</button>
       </a>
      </div>
    </>);
  }
  export default Card;