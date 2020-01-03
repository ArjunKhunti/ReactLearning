import React from "react";

function FunctionClick() {

    function clickHandler(){
        console.log('Button Clicked')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button> {/*clickHandler is function handler not funtion call */} 
    </div>
  );
}

export default FunctionClick;
