import { motion } from "framer-motion";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export const CourseAdvice = ({ title, subtitle, img, color, id, pdfUrl, videoUrl }) => {
    const navigate = useNavigate();

    // Variantes para animar los hijos en cascada
    const containerVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, staggerChildren: 0.2 } 
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.section
            className={styles.course__section__container}
            style={{ 
                borderLeft: `5px solid ${color}`,
                '--module-color': color // Pasamos el color como variable CSS
            }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className={styles.info__section}>
                <motion.h6 variants={itemVariants} style={{ color: color }}>
                    {subtitle}
                </motion.h6>
                
                <motion.h2 variants={itemVariants}>
                    {title}
                </motion.h2>

                {/* Este es el contenedor que ahora pondrá todo en una línea */}
                <motion.div className={styles.options__container} variants={itemVariants}>
                    <motion.button
                        className={`${styles.option} ${styles.aprende}`}
                        whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate(`/module/${id}`)}
                    >
                        Introduccion
                    </motion.button>

                    {videoUrl && (
                        <motion.a
                            href={videoUrl}
                            target="_blank"
                            className={`${styles.option} ${styles.video}`}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        >
                            Video introduccion
                        </motion.a>
                    )}

                    {pdfUrl && (
                        <motion.a
                            href={pdfUrl}
                            target="_blank"
                            className={`${styles.option} ${styles.ref}`}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                        >
                            Bibliografia
                        </motion.a>
                    )}
                </motion.div>
            </div>

            <motion.div className={styles.image__wrapper}>
                <motion.img
                    src={img}
                    alt={title}
                    initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", damping: 12, stiffness: 100 }}
                    style={{ filter: `drop-shadow(0 20px 40px ${color}66)` }}
                />
            </motion.div>
        </motion.section>
    );
};