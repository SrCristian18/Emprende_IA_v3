
import styles from "./index.module.css"

const Header =({title})=>{
    return(
        <header className={styles.header__container}>
            <h2>{title}</h2>
            <img src={`${import.meta.env.BASE_URL}assets/notifications__icon__black.svg`} alt="" />
            
        </header>
    )
}

export default Header;