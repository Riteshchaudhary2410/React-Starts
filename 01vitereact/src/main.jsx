import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyLie(){
  return(
    <div>
    <h1>I am a truth </h1>
</div>
  )
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyLie />
    <App /> 
  </StrictMode>
)
