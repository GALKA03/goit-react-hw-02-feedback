import PropTypes from 'prop-types';
import style from 'components/Statistics/Statistics.module.css'
export const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return ( 
        <>
    <ul className={style.list}>
            <li className={style.item}>Good:<br/>{good}</li>
            <li className={style.item}>Neutral:<br/>{neutral}</li>
            <li className={style.item}>Bad:<br/>{bad}</li>
            <li className={style.item}>Total:<br/>{total}</li>
            <li className={style.item}>Positive feetback:<br className=
                    {style.br } />{positiveFeedback}%</li>
            </ul>
        </>
)}
Statistics.propTypes = {
    good: PropTypes.number,
        neutral:PropTypes.number,
     bad:PropTypes.number,
      total:PropTypes.number,
       positiveFeedback:PropTypes.number,

}