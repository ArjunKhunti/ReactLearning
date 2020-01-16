import React from "react";
import "./App.css";
import FragmentDemo from "./components/Intermediate/FragmentDemo";
import Table from "./components/Intermediate/Table";
import PureComp from "./components/Intermediate/PureComp";
import ParentComp from "./components/Intermediate/ParentComp";
import RefsDemo from "./components/Intermediate/RefsDemo";
import FRParentInput from "./components/Intermediate/FRParentInput";
import PortalDemo from "./components/Intermediate/PortalDemo";
import Hero from "./components/Intermediate/Hero";
import ErrorBoundary from "./components/Intermediate/ErrorBoundary";
import ClickCounter from "./components/Intermediate/ClickCounter";
import HoverCounter from "./components/Intermediate/HoverCounter";
import ComponentA from "./components/Intermediate/ComponentA";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div className="App">
      {/* <UserProvider> */}
        <ComponentA />
      {/* </UserProvider> */}
      {/* 
      <ClickCounter name="Arjun"/>
      <HoverCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="SuperMan" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;

{
  /* <h1 className='error'>Error</h1>
<h1 className={styles.success}>Success</h1>
<Inline /> 
<StyleSheet primary={true}/> 
<NameList /> 
<UserGreetings /> 
<ParentComponent /> 
<EventBind /> 
<FunctionClick /> 
<ClassClick /> 
<Counter /> 
<Message /> 

This is use of props in function components 
<Greet name="Arjun" heroName="Iron Man">
<p>This is a children tag!</p>
</Greet>

<Greet name="Ritesh" heroName="Hulk">
<button>Action</button>
</Greet>
<Greet name="Yug" heroName="Captain America"/> 

This is use of props in Class components 
<Welcome name="Arjun" heroName="Iron Man"/>
<Welcome name="Ritesh" heroName="Hulk"/>
<Welcome name="Yug" heroName="Captain America"/> 

<Hello />   */
}
