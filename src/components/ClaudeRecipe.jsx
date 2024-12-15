import ReactMarkdown from "react-markdown"
export default function ClaudeRecipe(props){
    return(
        <section>
            <h2>Spice AI Recommends:</h2>
            <ReactMarkdown>
                {props.recipe}
            </ReactMarkdown>
        </section>
    )
}