import React from "react"
import IngredientsList from "./components/IngredientsList"
import { getRecipeFromChefClaude, getNewRecipeFromChefClaude } from "./ai";
import ClaudeRecipe from "./components/ClaudeRecipe";

export default function Central(){

    const [ingredients,setIngredients] = React.useState([]);
    const [recipe,setRecipe] = React.useState("");
    const [newRecipe,setNewRecipe] = React.useState("");
    const [inputtedIngredient,setInputtedIngredient] = React.useState("")

    function addIngredient(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const new_ingredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients,new_ingredient])
        setInputtedIngredient("")
        
    }

    function handleInputChange(event){
        setInputtedIngredient(event.target.value);
    }
    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
        setRecipe(recipeMarkdown)
    }

    async function generateNewRecipe(){
        const recipeMarkdown = await getNewRecipeFromChefClaude(ingredients,recipe)
        setNewRecipe(recipeMarkdown)
        console.log(newRecipe)
    }

    return(
        <main>
            <form onSubmit={addIngredient} className = "add-ingredients">
                <input
                    className = "add-ingredients-input"
                    type = "text"
                    placeholder = "i.e. Peppers"
                    aria-label = "Add Ingredient"
                    name = "ingredient"
                    value = {inputtedIngredient}
                    onChange = {handleInputChange}
                />
                <button className = "add-ingredients-button">Add Ingredient</button>
            </form>

            {ingredients.length > 0 && 
                <IngredientsList ingredients = {ingredients} getRecipe = {getRecipe}/>}

            {recipe && <ClaudeRecipe recipe = {recipe}/>}

            {recipe && <div className="get-recipe-container">
                <div>
                    <h3>Not Happy with this Recipe?</h3>
                    <p>Generate another Recipe</p>
                </div>
                <button onClick = {generateNewRecipe}>Generate Another Recipe</button>
                </div>}


            {newRecipe && <ClaudeRecipe recipe = {newRecipe}/>}

        </main>
    )

}