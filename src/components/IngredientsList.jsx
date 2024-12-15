export default function IngredientsList(props){
    const list_items = props.ingredients.map(ingredient =>
        (<li key = {ingredient}>{ingredient}</li>))

    return (
        <section>
            <h2>Ingredients Available</h2>
            <ul className = "ingredients-list">
                {list_items}
            </ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for Spice AI to take Over?</h3>
                    <p>Generate a Recipe based off the ingredients on hand</p>
                </div>
                <button onClick = {props.getRecipe}>Generate Recipe</button>
                </div>}
        </section>
    )
}