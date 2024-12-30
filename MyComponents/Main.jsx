import './main.css'
export default function Main(){
    return(
      <>
        <main>
            <form className='add-ingredient-form'>

            <input type="text" size={50} placeholder="Enter smth" />
            <button>+ Add Ingredient</button>
            </form>
        </main>

      </>
    );
}