import Beer from "./Components/Beer"
import Cleanup from "./Components/Cleanup"
import Header from "./Components/Header"
import "./Styles/main.scss"


function App() {
  

  return (
    <>
      <div>
        <Header title="Punkapi"/>
        <Beer/>
        <Cleanup/>
      </div>
       
    </>
  )
}

export default App
