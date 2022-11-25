//import { Statistics } from "components/Statistics/Statistics"
import PropTypes from 'prop-types';
import style from 'components/FeedbackOptions/FeedbackOptions.module.css'
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const keyNames = Object.keys(options)
    return (
        <ul className={style.list}>
                {keyNames.map(keyName => (
                    <li key={keyName} className={style.item}>  
                        <button
                            className={style.button}
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
FeedbackOptions.prototype = {
    options: PropTypes.object,
    onLeaveFeedback: PropTypes.func
}