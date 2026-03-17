import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

 let [counter, setcounter] = useState(15)



  //let counter = 15
  const addvalue = ()=>{
    if (counter < 20 ){
    setcounter(counter + 1) 
    }

}
const subtractvalue = () =>{
  if( counter > 0){
  setcounter(counter - 1)
}
}

  return (
   <>
   <h1>Chai aur react</h1>
   <h2>Counter value: {counter}</h2>
   <button 
   onClick={addvalue}
   >Add Value {counter}</button>
   <br></br>
   <button 
   onClick={subtractvalue}
   >Remove value {counter}</button>
   </>
  )
}

export default App
