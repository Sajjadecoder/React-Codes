import Header from '../MyComponents/Header'
import Main from '../MyComponents/Main'
import './index.css'
import { useState } from 'react'  

function App() {
  const [arr,addNewValInArr] = useState([])
  const mappedArr = arr.map(x=> 
    <h3>{x}</h3>
  )
  function pushVal(params) {
    addNewValInArr(prevArr=>[...prevArr,"Test"])
  }
  return (
    <>

      <Header />
      <Main />
      <button onClick={pushVal}>Add Item</button>
      {mappedArr}
    </>
  )
}

export default App
