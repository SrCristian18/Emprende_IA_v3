import { motion } from "framer-motion";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export const CourseAdvice = ({ title, subtitle, img, color, id, pdfUrl, videoUrl }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/module/${id}`);
    };

    return (
        <motion.section
            className={styles.course__section__container}
            style={{ backgroundColor: color }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
        >
            <motion.div
                className={styles.info__section}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            >
                <h2>{title}</h2>
                <h6>{subtitle}</h6>

                <motion.div
                    className={styles.options__container}
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { delayChildren: 0.3, staggerChildren: 0.15 },
                        },
                    }}
                >
                    <button
                        className={`${styles.option} ${styles.aprende}`}
                        onClick={handleClick}
                    >
                        Aprende
                    </button>

                    <motion.a
                        href={videoUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.option} ${styles.video}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Video tutorial
                    </motion.a>

                    <motion.a
                        href={pdfUrl || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.option} ${styles.ref}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Referencias
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.img
                src={img}
                alt={title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            />
        </motion.section>
    );
};