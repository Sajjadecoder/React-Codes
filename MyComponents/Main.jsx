import './main.css'
import FinalContent from './FinalContent';
import { useState } from 'react';
export default function Main(){
    // let ingredients= ["Oranges","Potatoes","Tomatoes"]
    // let mapped = ingredients.map(x=>{
    //     return <li key={x}>{x}</li>
    // })
    // function handleFormSubmit(event){
      
    //   event.preventDefault();//disallow page to be refreshed
    // }

    const [ingredients,addIngredient] = useState([])
    const mapped = ingredients.map(x=>{ return <li key={x}>{x}</li>}) 
    const [isEmpty,setIsEmpty]= useState(true)
    const [btnClicked,setBtn]= useState(false)
    function handleFormSubmit(event){
      event.preventDefault()
      const formData = new FormData(event.currentTarget);
      const newIngredient = formData.get('inputIngredient');
      
      if (newIngredient) {
        setIsEmpty(false)
        addIngredient(prevIngredients=>[...prevIngredients,newIngredient])
      }
    }
    function renderFinalContent(){
      setBtn(true)
    }
    return(
      <>
        <main >

            <form className='add-ingredient-form' onSubmit={handleFormSubmit}>

            <input type="text" size={50} placeholder="Enter smth" name='inputIngredient' />
            <button>+ Add Ingredient</button>
            </form>
            {!isEmpty && (
              <h3>Ingredients on hand:</h3>
            )}
            { mapped}
        </main>

        {!isEmpty && <footer className='get-recipe'>
          <section>

          <h4>Ready for a Recipe?</h4>
          <p>Generate a recipe from your list of ingredients</p>
          </section>
          <button className='get-recipe-btn' onClick={renderFinalContent}>Get a recipe</button>
        </footer>
        }
        {btnClicked && <FinalContent/>}


      </>
    );
}