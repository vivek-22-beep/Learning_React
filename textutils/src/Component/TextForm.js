import React, { useState } from "react";

export default function TextForm(props) {
   

  const handleOnclickUpper = () => {
    let newUpperText = text.toUpperCase();
    setText(newUpperText);
  };

  const handleonChange = (event) => {
    setText(event.target.value);
  };

  const handleonclickLower=()=>{
    let newLowerText=text.toLowerCase();
    setText(newLowerText);
  }
  const handleonclickClear=()=>{
    let clearText="";
    setText(clearText);
  }
  
  const [text, setText] = useState("");
  return (
    <>
    <div className="my-2">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleonChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleOnclickUpper}>Convert to UpperText</button>
      <button className="btn btn-primary mx-2" onClick={handleonclickLower}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={handleonclickClear}>Clear</button>
    </div>
    <div className="my-3">
      <h1>Letter counting</h1>
      <div className="mb-3">
        <label>Total no. of letters are {text.length} </label>
      </div>
      
      
      <h1>Word counting</h1>
      <div className="mb-3">
        <label>Total no. of Words are {text.split(" ").length-1} </label>
      </div>
    </div>


    </>
    
  );
}
