import Header from '../MyComponents/Header'
import Main from '../MyComponents/Main'
import './index.css'
import { useState } from 'react'  

function App() {
  // const [arr,addNewValInArr] = useState([])
  // const mappedArr = arr.map(x=> 
  //   <h3>{x}</h3>
  // )
  // function pushVal(params) {
  //   addNewValInArr(prevArr=>[...prevArr,"Test"])
  // }
  //imp: if buttons are placed inside a form,they work like input type="submit"
  function printUserData(event){
    event.preventDefault();
    const newData = event.currentTarget
    const formData = new FormData(newData)
    const email = formData.get('Email')
    const password = formData.get('password')
    console.log(email)
    console.log(password)
  }
  return (
    <>
      <h1>Signup Form</h1>
      <form method='post' onSubmit={printUserData}>
        <label htmlFor="email">Email: </label>
        <input type="email" name='Email' placeholder='Enter Email' id='email'/>
        <label htmlFor="password">Password: </label>
        <input type="password" name='password' placeholder='Enter Password' id='password'/>
        <button>Click to Submit</button>
      </form>
    </>
  )
}

export default App
