import styles from "./index.module.css";

export const Banner = () => {
    return (
        <>
            <section className={styles.hero__section}>
    <h1 className={styles.hero__title}>Aprende a emprender</h1>
    <p className={styles.hero__subtitle}>
        Desarrolla las habilidades que impulsan tus ideas hacia el éxito.
    </p>
    
    <div className={styles.search__container}>
        {/* Este DIV es nuevo y es el que da el efecto de caja blanca pro */}
        <div className={styles.search__box}>
            <input 
                type="text" 
                placeholder="¿Qué quieres aprender?" 
                className={styles.search__input} 
            />
            <button className={styles.search__btn}>
                {/* Icono de Lupa moderno en SVG */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" style={{width: '20px', height: '20px'}}>
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </div>
    </div>
</section>

            
            <svg
                className={styles.banner__wave}
                width="100%"
                height="70"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
            >
                <path
                    id="wavepath"
                    d="M0,0 L110,0 C35,150 35,0 0,100 z"
                    fill="#282A35"
                />
            </svg>
        </>
    );
};
