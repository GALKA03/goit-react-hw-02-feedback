import style from 'components/Section/Section.module.css'
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <>
            <h1 className={style.title}>{title}</h1>
            {children}
        </>
 )

}

Section.prototype = {
    title: PropTypes.string,
    
}