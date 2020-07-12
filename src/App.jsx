import React, { useState } from "react";

const App = () =>{
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
  });


  const inputEvent = (event) =>{
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;
    //destructuring code
    const {  value, name  } = event.target;

    setFullName((preValue) => {
      // Spread operator function
      return{
        ...preValue,
        [name]:value,
      };
    //  console.log(preValue);
    // if (name === "fName") {
    //   return {
    //     fname: value ,
    //     lname: preValue.lname ,
    //     email: preValue.email,
    //     phone: preValue.phone,
    //   }; 
    // }else if (name === "lName") {
    //   return {
    //     fname: preValue.fname,
    //     lname: value ,
    //     email: preValue.email,
    //     phone: preValue.phone,
    //   }; 
    // }
    // else if (name === "email") {
    //   return {
    //     fname:  preValue.fname,
    //     lname:  preValue.lname,
    //     email:  value,
    //     phone:  preValue.phone,
    //   }; 
    // }
    // else if (name === "phone") {
    //   return {
    //     fname: preValue.fname,
    //     lname: preValue.lname,
    //     email: preValue.email,
    //     phone: value,
    //   }; 
    // }
    });
    };

//submit button function
  const onSubmit = (event) =>{
    event.preventDefault();
    alert("check alert");
  };
  
  
  return(
    <>
      <form  onSubmit={onSubmit}>
        <h2>Hello {fullName.fname} {fullName.lname} </h2>
        <p>{fullName.email}</p>
        <p>{fullName.phone}</p>
        <input type="text" 
        placeholder="first name" 
        name="fname" 
        onChange={inputEvent} 
        value={fullName.fname} 
        />
        <input type="text" 
        placeholder="last name" 
        name="lname" 
        onChange={inputEvent} 
        value={fullName.lname} 
        />
        <input type="email" 
        placeholder="Enter Email " 
        name="email" 
        onChange={inputEvent} 
        value={fullName.email} 
        />
        <input type="number" 
        placeholder="first name" 
        name="phone" 
        onChange={inputEvent} 
        value={fullName.phone} 
        />
        <button type="submit">Click Me</button>
      </form>
    </>
  );
};

export default App;



// inputs name and password fetch data

// import React, { useState } from "react";


// const App = () =>{
//     const [name, setName] = useState("");
//     const [fullName, setFullName] = useState("");
//     const [lastName, setlastName] = useState("");
//     const [fullLastName, setFullLastName] = useState("");

//     const inputEvent = (event) => {
//       setlastName(event.target.value);
//     };

//     const inputEventTwo = (event) => {
//       setName(event.target.value);
//   };

//     const onSubmits = (event) => {
//       event.preventDefault();
//       setFullName(name);
//       setFullLastName(lastName);
//     };
//     return(
//         <> 
//           <form onSubmit={onSubmits}>
//             <div>
//                 <h2>Hello {fullName} {fullLastName}</h2>
//                 <input type="text" onChange={inputEvent} placeholder="Enter Name" value={name}/><br></br>
//                 <input type="text" onChange={inputEventTwo} placeholder="Enter Password" value={lastName} />
//                 <button type="submit">Submitted</button>
//             </div>
//             </form>
//         </>
//     );
// }

// export default App;







// Events with the help of hooks
// import React, { useState } from "react";


// const App = () =>{
//     const purple = "#8e44ad";
//     const [bg, setColor] = useState(purple);
//     const [name, updateName] = useState("Click Me");
// const bgColor= () =>{
//     let newColor = "red";
//     setColor(newColor) ;
//     updateName("ouch!!")

// };

// const bColor = () =>{
//     setColor(purple);
//     updateName("Back!!")
// }
//     return(<>
//             <div style={{backgroundColor:bg}}>
//             <button onClick={bgColor} onDoubleClick={bColor}>{name}</button>
//             </div>
//         </>
//         );
// };

// export default App;





// import React, { useState } from "react";

// const App = () =>{
//  let time = new Date().toLocaleTimeString();
//  const [count, setTime] = useState(time);
//  const updateTime = () =>{
//     new Date().toLocaleTimeString();
//     setTime(time);
//       };
 
//     return (

//         <>
//     <h2>{count}</h2>
//     <button onClick={updateTime}>click Me</button>
//     </>
//     );
// };

// export default App;





// Hooks useState chalenge 
// import React, { useState } from "react";


// const App = () =>{
//  let newTime = new Date().toLocaleTimeString();

//  const [ctime, setTime] = useState();
//   const updateTime = () => {
//     newTime = new Date().toLocaleTimeString();
//     setTime(newTime);

//   };

// setInterval(updateTime,1000)
// return(
//     <>
//         <h2>{newTime}</h2>
        
//     </>
// );
// {

// };
// };

// export default App;




// Hooks useState
// import React, { useState } from "react";

// const App = () => {
//     const state = useState();

//     const [count, setCount] = useState(0);
//     const IncNum = () => {
//         setCount(count + 1);
//     };
//     return (
//         <>
//             <h1>{count}</h1>
//             <button onClick={IncNum}>Click Me</button>
//         </>
//     );
// };

// export default App;





// import React from "react";
// import Para from "./Para";
// import ParaTwo from "./ParaTwo";

// const favSeries = "fdfdf";

// // const FavS = () =>{
// //     if(favSeries === "netflix"){
// //        return <Para />;

// //     }
    
    
// //     else{
// //         return <ParaTwo />;
// //     }
// // }

// const App = () => (<>{ favSeries === "netflix" ? <Para /> : <ParaTwo /> }</>);

// export default App;










// import React from "react";

// function sum(a,b){
//     let sum = a+b;
//     return sum;
// }
// export default sum;

// The import and export module 
// const first = "Front End Developer";
// const sec = "Learn Reactjs";

// function gf(){
//     let name = "saira";
//     return name;
// }

// export default first;
// export {sec , gf};


// import React from "react";
// import "./index.css";

// function App(){
//     let curDate = new Date();
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
// return<h2>A day Greating ' <span style={cssStyle}> {greeting}</span> ' </h2>;
// }

// export default App;











// import React from "react";
// import Para from "./Para";
// import ParaTwo from "./ParaTwo";
// import Listing from "./Listing";


// function App(){
//     return<>
//     <Para/>
//     <ParaTwo/>
//     <Listing/>
//   </>; 
//  }

//  export default App;