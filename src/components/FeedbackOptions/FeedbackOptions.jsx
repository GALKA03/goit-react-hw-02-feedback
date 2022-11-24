//import { Statistics } from "components/Statistics/Statistics"
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const keyNames = Object.keys(options)
    console.log(keyNames)
    return (
            <ul>
                {keyNames.map(keyName => (
                    <li key={keyName}>  
                        <button
                            type="button"
                            name  = {keyName}
                            onClick={() => onLeaveFeedback(keyName) }>
                            {keyName}
                        </button>
                    </li>
                ))}
            
            </ul>
            
          
    )
}