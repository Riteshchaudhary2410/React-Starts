import { useState } from 'react'
import './App.css'
import { useEffect } from "react"
import { Clipboard, ClipboardCheckIcon } from 'lucide-react';
import { ClipboardCheck } from 'lucide-react';


function App() {
  const [pwdlen, setPwdlen] = useState(8)
  const [pwd, setPwd] = useState('')
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false)
  const [copied, setCopied] = useState(false)
  useEffect(() => {
  const savedPwd = localStorage.getItem("password")
  if (savedPwd) {
    setPwd(savedPwd)

  }
  
}, [])

 const generatepwd =()=>{ 
  let newpwd = ""
  let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(includeNumbers){
      chars += "0123456789"
    }
  if(includeSpecialChars){
      chars += "!@#$%^&*()_+~`|}{[]:;?><,./-="
    }  
  for(let i=0; i<pwdlen; i++){
    let randomIndex = Math.floor(Math.random() * chars.length)
    newpwd += chars[randomIndex]
    
    
  }
  
  setPwd(newpwd)
localStorage.setItem("password", newpwd)

}
const handleCopy = () => {
  navigator.clipboard.writeText(pwd)
 // alert("Password copied to clipboard!")
  setCopied(true)
  setTimeout(() => {
    setCopied(false)
  }, 2000)
 

}


  return (
  
    <div className='flex rounded-xl bg-blue-200 w-[600px] h-[400px] flex-col items-center justify-center gap-5'>
      <h1 className='text-3xl font-bold text-center'>Password Generator</h1>
     <div className='flex w-19 text-center rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 p-2 bg-white'><input
        type='text'
        value={pwd}
        readOnly
        className='flex rounded-md'
         />
        <button className='flex bg-green-500 rounded-md px-2 py-1 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500'
        onClick={handleCopy}>
           {copied  ? <ClipboardCheck /> : <Clipboard />}
            </button>
            {copied && <span className="text-green-600 ml-2">Copied!</span>}
           {/*  if (copied) {return <span className="text-black-500">Copied!</span>}*/}
            </div>
      <button 
      onClick={generatepwd}
      className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'>
        Generate Password
      </button>
      <div>
        <input
        type='range'
        min={8}
        max={20}
        value={pwdlen}
        onChange={(e) => setPwdlen(Number(e.target.value))
        }
        className='w-20 h-2 rounded-lg appearance-none cursor-pointer'
      />
      length:{pwdlen}
        <input 
      type='checkbox'
      checked={includeNumbers}
      onChange={() => setIncludeNumbers(!includeNumbers)}
      className='cursor-pointer'
      
      />IncludeNumbers
      <input
        type='checkbox'
        checked={includeSpecialChars}
        onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
        className='cursor-pointer'
      />IncludeSpecialChars
    </div>
    </div>
  )
}

export default App
