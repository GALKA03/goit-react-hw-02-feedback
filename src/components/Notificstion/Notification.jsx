import style from 'components/Notificstion/Notification.module.css'
import PropTypes from 'prop-types';
export const Notification = ({ message }) => {
    return ( 
       <div className={style.conteiner} >
<p className={style.text}>{message}</p>
    </div> 
    )
    
}
Notification.prototype = {
    message: PropTypes.string
}