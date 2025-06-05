 // import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx"
// import ClassComponent from "./components/ClassComponent.tsx"
// import FunctionalComponent from "./components/functionalComponent.tsx"
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx"
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx"

import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import NameChangerPage from "./pages/NameChangerPage"

// import ClassComponentWithState from "./components/ClassComponentWithState"
//import Counter from "./components/Counter"
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState"
//import { useEffect } from "react"
import Layout from "./components/Layout"
//import NameChangerComponent from "./components/NameChangerComp"
//import OnlineStatus from "./components/OnlineStatus";
// import CounterWithMoreStatesComp from "./components/CounterWithMoreStatesComp"
// import CounterAdvancedComp from "./components/CounterAdvancedComp"
// import CounterWithCustomHooks from "./components/CounterWithCustomHooks"
//import CounterAdvancedWithCustomHooks from "./components/CounterAdvancedWithCustomHooks"
//import CounterWithReducer from "./components/CounterWithReducer"
//import Todo from "./components/toDo/Todo.tsx"

// import CFLogo from "./components/CFLogo"

function App() {

  // useEffect(() => {
  //       const id: number = setInterval(() => console.log("tick"), 1000);
  //       return () => {
  //           clearInterval(id);
  //       };
  //   }, []);


  return (
    <>
      {/* <ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
      
      <ArrowFunctionalComponentWithProps title="Is a arrow functional component with props!"/>
      <ArrowFunctionalComponentWithPropsType title="Is a arrow functional component with props!"
      description="This a description"/> */}
      {/* <CFLogo/> */}
        {/* <Layout>  */}
          {/* <h1 className="text-center text-2xl font-bold"> This is a heading title</h1>
          <ArrowFunctionalComponent/>   */}
          {/* <ClassComponentWithState/>           */}
          {/* <FunctionalComponentWithState/>  */}
          {/* <Counter/>  */}
          {/* <CounterWithMoreStatesComp/> */}
          {/* <CounterAdvancedComp/> */}
          {/* <CounterWithCustomHooks/> */}
          {/* <CounterAdvancedWithCustomHooks/> */}
          {/* <CounterWithCustomHooks/> */}
          {/* <NameChangerComponent/> */}
          {/* <NameChangerComponent/>  */}
          {/* <OnlineStatus/> */}
          {/* <CounterWithReducer/>  */}
          {/* <Todo/>  */}
        {/* </Layout> */}
        <BrowserRouter>
           <Layout>
             <Routes>
              <Route path="/" element={<HomePage/>} />  
              <Route path="/name-changer" element={<NameChangerPage/>} />          
            </Routes>
           </Layout> 
        </BrowserRouter>

    </>
  )
}

export default App
