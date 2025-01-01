import Header from '../MyComponents/Header'
import Main from '../MyComponents/Main'
import FinalContent from '../MyComponents/FinalContent'
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


  //exercise: 
  // const [unreadMsgs,setUnread] = useState(10)
  {/* {unreadMsgs==0 && (<h1>There are no unread msgs</h1>)}
  {unreadMsgs>0 && (<h1>There are {unreadMsgs} unread msgs</h1>)} */}
  return (
    <>

      <Header/>
      <Main/>
      
    </>
  )
}

export default App











































  {
    
    /* <h1>Signup Form</h1>
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

  //   <button>Click to Submit</button>

  //   {userEmail && (
  //     <div>

  //       Your Email: {userEmail}
  //       <br />
  //       Your Password: {userPass}
  //       <br />
  //       Your Gender: {userGender}
  //     </div>
  //   )
  //   }
  // </form> */}  