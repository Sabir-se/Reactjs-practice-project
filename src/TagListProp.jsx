import React from "react";

const TagListProp = (props) =>{
   
    return(<>
         <div className="lis">
         <i class="fa fa-close" aria-hidden="true" onClick={() => {
             props.onSelect(props.id);
         }}></i>
        <li>{props.text}</li>
        </div>
    </>);
};
export default TagListProp;