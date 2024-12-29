import Header from '../MyComponents/Header'
import ContactBox from '../MyComponents/ContactBox'
import './index.css'
import catPic1 from '../catpic1.jpg'
import catPic2 from '../catpic2.jpg'
import catPic3 from '../catpic3.jpg'
import catPic4 from '../catpic4.jpg'
function App() {

  return (
    <>
      <Header />
      <div>

      <h1>Learn from React</h1>
      <ul>
        <li>Lorem, ipsum dolor.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
        <li>Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem ipsum dolor sit amet consectetur.</li>
      </ul>
      {/* <h2>it is about {new Date().getHours() %12 } pm</h2> */}
      </div>
      <div className="boxes" style={{display: 'flex',flexDirection:'row' ,innerHeight: '40px', gap: '10px',border: '2px solid red',alignItems: 'center',justifyContent: 'center'}}>

      <ContactBox img = {catPic1} name='Catto 1'  phoneNumber = '+92345545321 '/>
      <ContactBox img = {catPic2} name='Catto 2'  phoneNumber = '+92345545322 '/>
      <ContactBox img = {catPic3} name='Catto 3'  phoneNumber = '+92345545323 '/>
      <ContactBox img = {catPic4} name='Catto 4'  phoneNumber = '+92345545324 '/>
      </div>
    </>
  )
}

export default App
