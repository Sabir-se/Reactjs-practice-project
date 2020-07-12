import React, { useState } from "react";
import TagListProp from "./TagListProp";

const TagList = () => {
    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    
    const itemEvent = (event) => {
        setInputList(event.target.value);

    };

    const listOfItems = () =>{
        setItems((oldItems) => {
            return [...oldItems, inputList];

        });
        setInputList("");
    };
    const deleteItems = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    };
    return(
        <>
            <div>
                <div class="center-div">
                <h2>To DO List</h2>
                <input type="text"  placeholder="first name" value={inputList} name="fname" onChange={itemEvent} />
                <button onClick={listOfItems} > + </button>
                <ol>
                    {/* Mapping-array-function */}
                    {Items.map((itemval, index) => {
                        return <TagListProp key={index} id={index} text={itemval} onSelect={deleteItems} /> ;
                    })}
                </ol>

                </div>
            </div>
        </>
    );
};

export default TagList;