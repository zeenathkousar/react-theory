import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount]=useState(0);
  const [data,setData]=useState('zee')

  useEffect(()=>{
    console.log('component mounted')
  },[data])

  function updateCount(){
    setCount(count+1);
  }
  function updateData(){
    setData('zebra')
  }
  return (
    <>
    <h1>button clicked {count}  times</h1>
    <button onClick={updateCount}>Click</button>
    <button onClick={updateData}>update data</button>
    </>
  )
}

export default App
