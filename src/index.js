import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TagList from "./TagList";

ReactDOM.render(<TagList/>,
  document.getElementById('root')
);




// import React from "react";
// import ReactDOM from "react-dom";
// import sum from "./App";


// ReactDOM.render(
// <>
// <ul>
//   <li>{sum(20,8)}</li>
// </ul>

// </>,
//   document.getElementById('root')
//   );






// The import and export module 
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import first , {sec , gf}  from "./App";


// ReactDOM.render(
//   <>
//   <ol>
//     <li>Sabir</li>
//     <li>Khan</li>
//     <li>{first}</li>
//     <li>{sec}</li>
//     <li>{gf()}</li>
//   </ol>
//   </>,
//   document.getElementById('root')
// );



// The Collect App files content and export main file
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";



// ReactDOM.render(
//     <App/>,
//   document.getElementById('root')
// );
// the time condition
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// let curDate = new Date();
// curDate = curDate.getHours();

// let greeting = "";
// const cssStyle = {
//   color : 'Green'
// };

// if (curDate >=1 && curDate <12 ){
//   greeting = "Good Morning";
//   cssStyle.color = 'green';
// }else if (curDate >=12 && curDate < 19 ){
//   greeting = "Good After Noon";
//   cssStyle.color = 'Yellow';
// }else{
//   greeting = "Good Night";
//   cssStyle.color = 'Black';
// }


// ReactDOM.render(
//   <>
//   <h2>A day Greating ' <span style={cssStyle}> {greeting}</span> ' </h2>
//   </>,
//   document.getElementById('root')
// );




// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';

// const name = "images";
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";

// ReactDOM.render(
//   <>
//   <h2 class="heading" contentEditable="true">this Is {name} Test and ContentEditable</h2>
//   <div class="img-div">
//   <img src={img1} alt="dumy-pic"/>
//   <img src={img2} alt="dumy-pic"/>
//   <img src={img3} alt="dumy-pic"/>
//   </div>
//   </>,
//   document.getElementById('root')
// );