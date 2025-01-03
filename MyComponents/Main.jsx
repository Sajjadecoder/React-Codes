import './main.css'
import FinalContent from './FinalContent';
import { useState } from 'react';
import axios from 'axios';
export default function Main() {

  // const apiKey = process.env.REACT_APP_HUGGINGFACE_API_KEY
  const [ingredients, addIngredient] = useState([])
  const mapped = ingredients.map(x => { return <li key={x}>{x}</li> })
  const [isEmpty, setIsEmpty] = useState(true)
  const [btnClicked, setBtn] = useState(false)
  const [recipe, setRecipe] = useState(null)
  function handleFormSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get('inputIngredient');

    if (newIngredient) {
      setIsEmpty(false)
      addIngredient(prevIngredients => [...prevIngredients, newIngredient])
    }
  }

  async function fetchRecipeFromAPI() {
    // console.log(apiKey)
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/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',
        { inputs: `Generate a recipe that includes the following ingredients: ${ingredients.join(', ')}` },
        {
          headers: {
            Authorization: `Bearer ${api}`,
          },
        }
      );
      if (response.data && response.data.generated_text) {
        setRecipe(response.data.generated_text); // Save the recipe
      } else {
        setRecipe('No recipe generated. Try with different ingredients.');
      }
    } catch (error) {
      console.error('Error fetching recipe:', error);
      setRecipe('An error occurred. Please try again later.');
    }
  }


  function renderFinalContent() {
    setBtn(true)
    fetchRecipeFromAPI()

  }
  return (
    <>
      <main >

        <form className='add-ingredient-form' onSubmit={handleFormSubmit}>

          <input type="text" size={50} placeholder="Enter smth" name='inputIngredient' />
          <button>+ Add Ingredient</button>
        </form>
        {!isEmpty && (
          <h3>Ingredients on hand:</h3>
        )}
        {mapped}
      </main>

      {!isEmpty && <footer className='get-recipe'>
        <section>

          <h4>Ready for a Recipe?</h4>
          <p>Generate a recipe from your list of ingredients</p>
        </section>
        <button className='get-recipe-btn' onClick={renderFinalContent}>Get a recipe</button>
      </footer>
      }
      {btnClicked && <FinalContent recipe={recipe} />}


    </>
  );
}