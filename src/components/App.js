
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const[currentValue,setCurrentValue]=useState(0);
  const [sum, setSum] = useState(0);

  useEffect(()=>{
    setSum(prevsum=>prevsum+currentValue)

  },[currentValue])

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" value={currentValue} onChange={(e)=>{
        setCurrentValue(Number(e.target.value))

      }}></input>
    <br/>
      <p>Sum:{sum}</p>

        {/* Do not remove the main div */}
    </div>
  )
}

export default App
