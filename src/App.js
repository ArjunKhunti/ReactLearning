import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreetings from "./components/UserGreetings";

function App() {
  return (
    <div className="App">

      <UserGreetings />
      {/* <ParentComponent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Counter /> */}
      {/* <Message /> */}

      {/* This is use of props in function components */}
      {/* <Greet name="Arjun" heroName="Iron Man">
        <p>This is a children tag!</p>
      </Greet>

      <Greet name="Ritesh" heroName="Hulk">
        <button>Action</button>
      </Greet>
      <Greet name="Yug" heroName="Captain America"/> */}

      {/* This is use of props in Class components */}
      {/* <Welcome name="Arjun" heroName="Iron Man"/>
      <Welcome name="Ritesh" heroName="Hulk"/>
      <Welcome name="Yug" heroName="Captain America"/> */}

      {/* <Hello />  */}
    </div>
  );
}

export default App;
