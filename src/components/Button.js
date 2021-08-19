import style from './button.module.css'
export const Button = ({ text, variant, color } ) => {
    return (
        <button className={style[variant]} style={{color}} >{text}</button>
    )
}