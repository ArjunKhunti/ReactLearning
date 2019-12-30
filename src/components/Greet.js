import React from "react";

// function Greet(){
//     return <h1>Hello World!</h1>
// }

const Greet = ({ name, heroName }) => {
  // const Greet = props => {
  // const {name, heroName} = props
  // console.log(props)
  return (
    <div>
      <h1>
        Hello {name} and heroname is {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};

export default Greet;
