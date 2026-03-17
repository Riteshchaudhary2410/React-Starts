import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("white")

  return (
 
    <div className='flex gap-5  justify-center rounded-xl items-end h-[100vh] border ' style={{backgroundColor: bgColor}}>

    <div className='bg-gray-400 p-2 space-x-6 rounded-xl'>
      <button className='bg-blue-700 p-2 rounded-xl text-white font-bold' onClick={()=> setBgColor("blue")}>
      Blue
    </button>
    <button className='bg-red-500 p-2 rounded-xl text-white font-bold' onClick={()=> setBgColor("red")}>
      Red
    </button>
    <button className='bg-green-500 p-2 rounded-xl text-white font-bold' onClick={()=> setBgColor("green")}>
      Green
    </button>
    </div>
    </div>

  )
}

export default App
