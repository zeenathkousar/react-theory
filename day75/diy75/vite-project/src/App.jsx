import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([])
  const [search,setSearch]=useState('')
  console.log(search)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((json) => {
        setData(json)
      console.log(json)
      })
  

  },[])
  console.log(data)

  return (
    <>
      <div>
        <h1>get api call</h1>
        <input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder='search here'/>
        <table border="1" >
          <thead>

          <tr>
            <td>id</td>
            <td>name</td>
            <td>email</td>
            <td>phone</td>
          </tr>
          </thead>
          <tbody>

          {
            data.filter((item)=>{
            //  return  search.toLowerCase == ' ' ? item : item.name.toLowerCase().includes(search)
            return search.toString === '' ? item :item.id.toString().includes(search)
            }).map((item) => {
              return(
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>

              </tr>
              )
            })
          }
          </tbody>
        </table>

      </div>
    </>
  )
}

export default App
