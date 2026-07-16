import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ConfettiEffect from "./components/ConfettiEffect";
import styles from "./index.module.css";

const CongratsSlide = ({ module }) => (
    <div className={styles.congrats__page}>
        {/* Logo */}
        <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <Link to="/" className={styles.logo__btn}>
                EmprendIA
            </Link>
        </motion.div>

        {/* Título principal */}
        <motion.h2
            className={styles.title}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 12,
                delay: 0.3,
            }}
        >
            🎉 ¡Felicidades! 🎉
        </motion.h2>

        {/* Subtítulo */}
        <motion.h3
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
        >
            Completaste el módulo: <span>{module?.titulo}</span>
        </motion.h3>

        {/* Círculo decorativo animado */}
        <motion.div
            className={styles.circle}
            animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 15, -15, 0],
            }}
            transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
            }}
        />

        {/* Imagen de graduación */}
        <motion.img
            src={`${import.meta.env.BASE_URL}assets/graduated2.svg`}
            alt="Dos jóvenes graduándose"
            className={styles.image}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 1.2,
            }}
        />

        <ConfettiEffect />
    </div>
);

export default CongratsSlide;
