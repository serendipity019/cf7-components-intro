 // import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx"
// import ClassComponent from "./components/ClassComponent.tsx"
// import FunctionalComponent from "./components/functionalComponent.tsx"
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx"
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx"

// import ClassComponentWithState from "./components/ClassComponentWithState"
//import Counter from "./components/Counter"
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState"
import Layout from "./components/Layout"
//import NameChangerComponent from "./components/NameChangerComp"
// import CounterWithMoreStatesComp from "./components/CounterWithMoreStatesComp"
// import CounterAdvancedComp from "./components/CounterAdvancedComp"
// import CounterWithCustomHooks from "./components/CounterWithCustomHooks"
import CounterAdvancedWithCustomHooks from "./components/CounterAdvancedWithCustomHooks"

// import CFLogo from "./components/CFLogo"

function App() {


  return (
    <>
      {/* <ClassComponent></ClassComponent>
      <FunctionalComponent></FunctionalComponent>
      
      <ArrowFunctionalComponentWithProps title="Is a arrow functional component with props!"/>
      <ArrowFunctionalComponentWithPropsType title="Is a arrow functional component with props!"
      description="This a description"/> */}
      {/* <CFLogo/> */}
        <Layout> 
          {/* <h1 className="text-center text-2xl font-bold"> This is a heading title</h1>
          <ArrowFunctionalComponent/>   */}
          {/* <ClassComponentWithState/>           */}
          {/* <FunctionalComponentWithState/>  */}
          {/* <Counter/>  */}
          {/* <CounterWithMoreStatesComp/> */}
          {/* <CounterAdvancedComp/> */}
          {/* <CounterWithCustomHooks/> */}
          <CounterAdvancedWithCustomHooks/>
          {/* <CounterWithCustomHooks/> */}
          {/* <NameChangerComponent/> */}
          {/* <NameChangerComponent/>  */}
        </Layout>

    </>
  )
}

export default App
