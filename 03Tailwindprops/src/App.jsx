import { useState } from 'react'

import './App.css'
import Card from './components/Cards.jsx'
function App() {
  const [count, setcount] = useState(0)
  let myObj ={
    username: "Dipesh",
    age: "22"

  }
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
     <Card username="Ritesh" btntext="Push to deploy"/>
     <Card/>
     
      </div>
  )
}

export default App
