import { useState, useEffect, useRef } from "react";
import ContentApp from "./components/ContentApp/ContentApp";
import Search from "./components/Search/Search";
import "./App.css"


function App() {

  const [statea, setStatea] = useState(false)
  
  const handleState = (state) => {
    setStatea(state)
  }

  const scrollStyle = {
    overflowX: "hidden",
    overflowY: "scroll",
  }


  const ref = useRef(null)
  useEffect(() => {
    if (ref.current){
        ref.current.scrollTop = 0
    }
  }, [statea])

  return (
    <>
    <div ref={ref} className="background" style={statea ? scrollStyle : null}>
      <Search newState={handleState}/>
    </div>
    {statea ? null : <ContentApp/>}
    </>
  );
}

export default App;
