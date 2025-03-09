import classes from './Button.module.css'
export default function Button({children, isActive, ...props}) {
    // хуй
    return <button
        {...props}
        className={
        isActive ? `${classes.button} ${classes.active}` : classes.button}
    >
        {children}
    </button>
}