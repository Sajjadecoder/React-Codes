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
  const [userEmail, setEmail] = useState(null)
  const [userPass, setPassword] = useState(null)
  const [userGender, setGender] = useState(null)
  function printUserData(event) {
    event.preventDefault();
    const newData = event.currentTarget
    const formData = new FormData(newData)
    const email = formData.get('Email')
    const password = formData.get('password')
    const gender = formData.get('gender')
    // console.log(email)
    // console.log(password)
    // console.log(gender)
    setGender(gender)
    setPassword(password)
    setEmail(email)
  }
  return (
    <>
      <h1>Signup Form</h1>
      <form method='post' onSubmit={printUserData}>
        <label htmlFor="email">Email: </label>
        <input type="email" name='Email' placeholder='Enter Email' id='email' />
        <label htmlFor="password">Password: </label>
        <input type="password" name='password' placeholder='Enter Password' id='password' />
        <label htmlFor="choice1">
          <input type="radio" id='choice1' name='gender' value={'Male'} />
          Male
        </label>
        <label htmlFor="choice2">
          <input type="radio" id='choice2' name='gender' value={'Female'} />
          Female
        </label>
        <label htmlFor="choice3">
          <input type="radio" id='choice3' name='gender' value={'Custom'} />
          Custom
        </label>
        {/* name should be same for each radio button(in this case the name is gender) */}
        {/* value is required when submitting the form to access what is being selected by the user */}

        <button>Click to Submit</button>

        {userEmail && (
          <div>

            Your Email: {userEmail}
            <br />
            Your Password: {userPass}
            <br />
            Your Gender: {userGender}
          </div>
        )
        }
      </form>
    </>
  )
}

export default App
