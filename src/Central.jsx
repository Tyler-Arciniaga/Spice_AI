import React from "react"
import IngredientsList from "./components/IngredientsList"
import { getRecipeFromChefClaude } from "./ai";
import ClaudeRecipe from "./components/ClaudeRecipe";

export default function Central(){

    const [ingredients,setIngredients] = React.useState([]);
    const [recipe,setRecipe] = React.useState("");

    function addIngredient(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const new_ingredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients,new_ingredient])
        
    }
    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }
    return(
        <main>
            <form onSubmit={addIngredient} className = "add-ingredients">
                <input
                    type = "text"
                    placeholder = "i.e. Peppers"
                    aria-label = "Add Ingredient"
                    name = "ingredient"
                />
                <button>Add Ingredient</button>
            </form>

            {ingredients.length > 0 && 
                <IngredientsList ingredients = {ingredients} getRecipe = {getRecipe}/>}

            {recipe && <ClaudeRecipe recipe = {recipe}/>}

        </main>
    )

}