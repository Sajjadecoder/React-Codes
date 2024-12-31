import './main.css'
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
    function handleFormSubmit(event){
      event.preventDefault()
      const formData = new FormData(event.currentTarget);
      const newIngredient = formData.get('inputIngredient');
      
      if (newIngredient) {
        
        addIngredient(prevIngredients=>[...prevIngredients,newIngredient])
      }
    }
    return(
      <>
        <main >

            <form className='add-ingredient-form' onSubmit={handleFormSubmit}>

            <input type="text" size={50} placeholder="Enter smth" name='inputIngredient' />
            <button>+ Add Ingredient</button>
            </form>
            {mapped}
        </main>

      </>
    );
}