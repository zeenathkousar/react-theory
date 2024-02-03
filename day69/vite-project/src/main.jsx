import React from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App2.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
)

// //creating and rendering  in same component- main.jsx/index.js only
// const title1=React.createElement('h1',null,'heading1');
// const title2=React.createElement('h1',null,'heading2')

// //more than one element to render- use array like this
// ReactDOM.createRoot(document.getElementById('root')).render([title1,title2])



