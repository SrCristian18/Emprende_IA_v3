import { Link, useParams } from "react-router-dom";
import IaButton from "../../Components/IaButton";
import { ModuleSection } from "./components/ModuleSection";
import styles from "./index.module.css";
import { useEffect, useState, useCallback } from "react";
import { useModules } from "../../hooks/useModules";
import { LinearProgress } from "@mui/material";
import { motion } from "framer-motion";

export const Module = () => {
    const { id } = useParams();
    const { modules, selectedModule, selectModule, loading } = useModules();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    // 🔹 EFECTO MAESTRO: Forzar el cambio de módulo
    useEffect(() => {
        if (modules.length > 0) {
            // 1. Reiniciamos el índice de la diapositiva a 0
            setCurrentIndex(0);
            
            // 2. Llamamos a la selección del nuevo ID
            selectModule(id);
        }
    }, [id, modules, selectModule]); // Escucha cambios en el ID de la URL

    // 🔹 Construcción de slides (Memorizada para evitar loops)
    const buildSlides = useCallback((module) => {
        if (!module || !module.contenido) return [];
        const newSlides = [
            { type: "intro", data: module },
            { type: "objectives", data: module.objetivos },
        ];

        module.contenido.forEach((unidad, uIndex) => {
            unidad.lecciones.forEach((leccion, lIndex) => {
                newSlides.push({
                    type: "lesson",
                    unidadIndex: uIndex,
                    leccionIndex: lIndex,
                    data: leccion,
                });
            });
        });

        newSlides.push({ type: "congrats", data: module });
        if (module.test) newSlides.push({ type: "quiz", data: module.test });

        return newSlides;
    }, []);

    // Importante: Recalcular slides cada vez que cambia el selectedModule
    const slides = selectedModule ? buildSlides(selectedModule) : [];

    // 🔹 Navegación
    const goPrev = useCallback(() => {
        setCurrentIndex((i) => Math.max(0, i - 1));
    }, []);

    const goNext = useCallback(() => {
        setCurrentIndex((i) => Math.min(slides.length - 1, i + 1));
    }, [slides.length]);

    const jumpTo = useCallback((index) => {
        if (index < 0 || index >= slides.length) return;
        setCurrentIndex(index);
    }, [slides.length]);

    // 🔹 Actualizar progreso
    useEffect(() => {
        if (slides.length > 0) {
            setProgress(((currentIndex + 1) / slides.length) * 100);
        }
    }, [currentIndex, slides.length]);

    // Si el ID de la URL no coincide con el ID del módulo seleccionado, 
    // mostramos carga para evitar ver el contenido viejo.
    const isCorrectModule = selectedModule && String(selectedModule.id) === String(id);

    if (loading || !isCorrectModule) {
        return (
            <div className={styles.container} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <p>Cargando contenido del módulo {id}...</p>
            </div>
        );
    }

    return (
        <section className={styles.container}>
            <LinearProgress
                className={styles.progress__bar}
                variant="determinate"
                value={progress}
                sx={{
                    height: 8,
                    backgroundColor: "#fff",
                    "& .MuiLinearProgress-bar": { backgroundColor: "#FFB84D" },
                }} 
            />

            <section className={styles.module_main_container}>
                <ModuleSection
                    sections={slides}
                    currentIndex={currentIndex}
                    onPrev={goPrev}
                    onNext={goNext}
                    onJump={jumpTo}
                    course={selectedModule}
                />
            </section>
            <IaButton />
        </section>
    );
};