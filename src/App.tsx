 // import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx"
// import ClassComponent from "./components/ClassComponent.tsx"
// import FunctionalComponent from "./components/functionalComponent.tsx"
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx"
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx"

import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import NameChangerPage from "./pages/NameChangerPage"
import OnlineStatusPage from "./pages/OnlineStatusPage"

// import ClassComponentWithState from "./components/ClassComponentWithState"
//import Counter from "./components/Counter"
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState"
//import { useEffect } from "react"
//import Layout from "./components/Layout"
import UserPage from "./pages/UserPage"
import RouterLayout from "./components/RouterLayout"
import ExamplesPage from "./pages/ExamplesPage"
import ExamplesLayout from "./components/ExamplesLayout"
import AutoRedirectPage from "./pages/AutoRedirectPage"
import NotFoundPage from "./pages/NotFoundPage"
import FocusInput from "./components/FocusInput"
import UncontrolledInput from "./components/UncontrolledInput"
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
           
             
              <Routes>
                <Route element={<RouterLayout/>}>
                  {/* <Route path="/" element={<HomePage/>} />   */} // We can use this instead of index element
                  <Route index element={<HomePage/>} />        
                  <Route path="users/:userId" element={<UserPage/>}/>
                  <Route path="users" element={<UserPage/>}/> // This will match /users and /users?userId=12 used for query params
                  {/* <Route path="files/*" element={<FilePage/>}/>   //this is * seagment */}
                </Route>
                {/* <Route path="examples?"> // The question mark makes the path optional */}  
                <Route path="examples" element={<ExamplesLayout/>}> 
                    <Route index element={<ExamplesPage/>} /> 
                    <Route path="focus-input" element={<FocusInput/>} />
                    <Route path="uncontrolled-input" element={<UncontrolledInput/>} />
                    {/* <Route path="controlled-input" element={<ControlledInput/>} /> */}
                    <Route path="name-changer" element={<NameChangerPage/>} /> 
                    <Route path="online-status" element={<OnlineStatusPage/>} />  
                    <Route path="auto-redirect" element={<AutoRedirectPage/>} />               
                </Route>
                <Route path="*" element={<NotFoundPage/>} /> 
              </Routes>
             
            
        </BrowserRouter>

    </>
  )
}

export default App
