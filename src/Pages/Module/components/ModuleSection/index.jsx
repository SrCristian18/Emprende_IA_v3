import React, { useEffect, useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { Box, Button, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "./index.module.css"; 
import IntroSlide from "../slides/IntroSlide";
import { Link, useNavigate } from "react-router-dom";
import { HomeRounded } from "@mui/icons-material";
import SlideRenderer from "../SlideRenderer";

/**
 * ModuleSection
 */
export const ModuleSection = ({ sections = [], currentIndex = 0, onPrev, onNext, onJump, course }) => {
    const containerRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const el = containerRef.current;
        if (el) el.focus();
    }, [currentIndex]);

    const handleKey = useCallback(
        (ev) => {
            if (ev.key === "ArrowRight") {
                onNext?.();
            } else if (ev.key === "ArrowLeft") {
                onPrev?.();
            }
        },
        [onNext, onPrev]
    );

    useEffect(() => {
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [handleKey]);

    if (!Array.isArray(sections) || sections.length === 0) {
        return <div className={styles.empty}>Módulo vacío</div>;
    }

    const slide = sections[currentIndex];
    
    // Función que nos lleva a la Landing principal
    const goToHome = () => {
        navigate("/");
    };

    return (
        <div
            ref={containerRef}
            tabIndex={0}
            className={styles.fullscreen_container}
            aria-label={`Slide ${currentIndex + 1} de ${sections.length}`}
        >
            <div className={styles.slide_wrapper} id={`module-section-${currentIndex}`}>
                <header className={styles.slide_header}>
                    <Link to="/" className={styles.logo__btn}>EmprendIA</Link>
                </header>

                <main className={styles.slide_main}>
                    <SlideRenderer slide={slide} course={course} onJump={onJump}/>
                </main>

                <footer className={styles.slide_footer}>
                    {/* BTN ANTERIOR */}
                    <div className={styles.footer_left}>
                        <IconButton
                            aria-label="anterior"
                            onClick={onPrev}
                            disabled={currentIndex === 0}
                            size="large"
                            sx={{ color: "#5955b3" }}
                        >
                            <ArrowBackIosNewIcon />
                        </IconButton>
                    </div>

                    {/* CONTENEDOR CENTRAL: CASITA / FINALIZAR */}
                    <div className={styles.action__button__container}>
                        {
                            currentIndex === sections.length - 1 ?
                                <button
                                    className={styles.footer__btn}
                                    onClick={goToHome}
                                >
                                    Finalizar
                                </button>
                                :
                                /* CAMBIO AQUÍ: Ahora la casa usa goToHome en lugar de onJump(0) */
                                <HomeRounded
                                    sx={{
                                        color: '#5955b3',
                                        fontSize: 40,
                                        zIndex: 6,
                                        cursor: 'pointer' // Para que aparezca la manito al pasar el mouse
                                    }}
                                    onClick={goToHome} 
                                    className={styles.start__btn}
                                />
                        }
                    </div>

                    {/* BTN SIGUIENTE */}
                    <div className={styles.footer_center}>
                        <IconButton
                            aria-label="siguiente"
                            onClick={onNext}
                            disabled={currentIndex === sections.length - 1}
                            size="large"
                            sx={{ color: "#5955b3" }}
                        >
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </footer>
            </div>
        </div>
    );
};

ModuleSection.propTypes = {
    sections: PropTypes.array.isRequired,
    currentIndex: PropTypes.number.isRequired,
    onPrev: PropTypes.func,
    onNext: PropTypes.func,
    onJump: PropTypes.func,
    course: PropTypes.object
};