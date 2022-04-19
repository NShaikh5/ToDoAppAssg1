import React, { useState } from "react";

const App = ()=>{
  // const state = useState();
  // console.log(state);

  const [inputList, setInputList] = useState("");
  const [Items, setItems] =  useState([]); 
  const itemsEvent = (e) => {
    setInputList(e.target.value);
  };  
  
  // let count = 1;
  // const IncrNum = () => {
    // setCount(count+1);
    // console.log('clicked'+count++)
  // };
  const listOfItems = () => {
  
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  }

  return(
    <>
    <div className="main">
      <div className="center">
        <h1>Todo List</h1>
        <input type="text" value={inputList } placeholder="Add an Item" onChange={itemsEvent} />
        <button onClick={listOfItems}>ADD</button>

        <ul>
          
          { Items.map((itemval) => {
            return  <li>{itemval}</li>;
          }
        )}
        </ul>

      </div>
    </div>
 {/* <h1>{count}</h1> */}
 {/* <button onClick={IncrNum}>Click Me</button> */}
 </>
  );
};

export default App;