import { useModules } from "../../hooks/useModules";
import { Banner } from "../Components/Banner";
import { CourseAdvice } from "../Components/CourseAdvice";
import { Header } from "../Components/Header";
import { CourseCard } from "../../Components/CourseCard";
import IaButton from "../../Components/IaButton";
import styles from "./index.module.css";

const LandingPage = () => {
    const { modules, loading, error, colors } = useModules();
    
    return (
        <section className={styles.container}>
            <Header />
            <Banner />

            {/* Módulo 4: Gestión financiera */}
            <CourseAdvice 
                title="Gestión financiera" 
                subtitle="Optimización de recursos" 
                img="./assets/img__course1.jpeg" 
                color="#fff" 
                id={4} 
                pdfUrl="https://drive.google.com/uc?export=view&id=1bhRktYD6eRq4Xg4x6MwYXhzbmxnOUgNj"
                videoUrl="https://www.youtube.com/watch?v=-qdVn4irS78"
            />

            {/* Módulo 2: Planificación estratégica */}
            <CourseAdvice 
                title="Planificación estratégica" 
                subtitle="Rumbo al éxito comercial" 
                img="./assets/img__course2.jpeg" 
                color="#f6c7c1" 
                id={2} 
                pdfUrl="https://drive.google.com/uc?export=view&id=1xRnjx5mxI2oPxUUC0OzMdvysbfK458d0"
                videoUrl="https://www.youtube.com/watch?v=ytDRakRWGkE"
            />

            {/* Módulo 3: Innovación y creatividad */}
            <CourseAdvice 
                title="Innovación y creatividad" 
                subtitle="Generando ideas disruptivas" 
                img="./assets/img__course1.jpeg" 
                color="#fff" 
                id={3} 
                pdfUrl="https://drive.google.com/uc?export=view&id=1iIcXL_cy1LXTiZH5MtpCx1xgPOYS7gbj"
                videoUrl="https://www.youtube.com/watch?v=6ZIbwaaD3aM"
            />

            {/* Módulo 9: Networking y colaboración */}
            <CourseAdvice 
                title="Networking y colaboración" 
                subtitle="Conectando metas" 
                img="./assets/img__course2.jpeg" 
                color="#f6c7c1" 
                id={9} 
                pdfUrl="https://drive.google.com/uc?export=view&id=1OFRjI7Hg19WB8og7KEuvq7b-rWaAbLGc"
                videoUrl="https://www.youtube.com/watch?v=CoaqbSu6n2Y"
            />

            <section id="modulos" className={styles.all__courses__section}>
                {(modules ?? []).map((modulo, index) => (
                    <CourseCard
                        modulo={modulo}
                        key={modulo.id ?? index}
                        color={colors[index]}
                    />
                ))}
            </section>
            <IaButton />
        </section>
    );
};

export default LandingPage;