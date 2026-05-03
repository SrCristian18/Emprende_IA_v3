import { Link } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import styles from "./index.module.css";
import { useModules } from "../../../hooks/useModules";

export const Header = () => {
    const { modules } = useModules();
    const viewportRef = useRef(null);
    const [itemWidth, setItemWidth] = useState(240);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    useEffect(() => {
        const vp = viewportRef.current;
        if (!vp) return;
        const updateMeasurements = () => {
            const first = vp.querySelector(`.${styles.module__item}`);
            if (first) {
                const w = first.getBoundingClientRect().width;
                setItemWidth(Math.round(w));
            }
            setCanScrollPrev(vp.scrollLeft > 0);
            setCanScrollNext(vp.scrollLeft + vp.clientWidth < vp.scrollWidth - 1);
        };
        updateMeasurements();
        const ro = new ResizeObserver(updateMeasurements);
        ro.observe(vp);
        vp.addEventListener("scroll", updateMeasurements, { passive: true });
        window.addEventListener("resize", updateMeasurements);
        return () => {
            ro.disconnect();
            vp.removeEventListener("scroll", updateMeasurements);
            window.removeEventListener("resize", updateMeasurements);
        };
    }, [modules]);

    const handleNext = () => {
        const vp = viewportRef.current;
        if (vp) vp.scrollBy({ left: itemWidth, behavior: "smooth" });
    };

    const handlePrev = () => {
        const vp = viewportRef.current;
        if (vp) vp.scrollBy({ left: -itemWidth, behavior: "smooth" });
    };

    return (
        <header className={styles.header__main__box}>
            <div className={styles.header__container}>
                <ul className={styles.header__navlist}>
                    <li>
                        <Link to="/" className={styles.logo} style={{ textDecoration: 'none' }}>
                            EmprendIA
                        </Link>
                    </li>
                    <li><a href="#modulos">Módulos</a></li>
                    <li><Link to="/chat">Chat IA</Link></li> 
                </ul>
                <Link className={styles.login__btn} to="/login">
                    <img src="/assets/perfilline.svg" alt="" style={{ filter: "invert(1)" }} />
                    Iniciar sesión
                </Link>
            </div>

            <div className={styles.modules__wrapper}>
                <button className={`${styles.carousel__btn} ${styles.carousel__btn__left}`} onClick={handlePrev} disabled={!canScrollPrev}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>

                <div className={styles.modules__nav} ref={viewportRef} role="list">
                    {modules.map((modulo, index) => {
                        // SOLUCIÓN MAESTRA: Forzamos el ID basándonos en la posición (index + 1)
                        // Así: El 1er módulo siempre será /module/1
                        //      El 2do módulo siempre será /module/2
                        // Esto ignora si el "modulo.id" del contexto está mal.
                        const realId = index + 1; 

                        return (
                            <Link 
                                className={styles.module__item} 
                                key={index} 
                                to={`/module/${realId}`}
                            >
                                {modulo.titulo}
                            </Link>
                        );
                    })}
                </div>

                <button className={`${styles.carousel__btn} ${styles.carousel__btn__right}`} onClick={handleNext} disabled={!canScrollNext}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
            </div>
        </header>
    );
};