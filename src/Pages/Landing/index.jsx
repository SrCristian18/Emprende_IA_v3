import { useModules } from "../../hooks/useModules";
import { Banner } from "../Components/Banner";
import { CourseAdvice } from "../Components/CourseAdvice";
import { Header } from "../Components/Header";
import IaButton from "../../Components/IaButton";
import styles from "./index.module.css";

const LandingPage = () => {
    const { modules, loading, error, colors } = useModules();
    
    return (
        <section className={styles.container}>
            <Header />
            <Banner />

            {/* 🌟 ENVOLVEMOS LAS TARJETAS EN LA SECCION */}
            <section id="modulos" className={styles.all__courses__section}>
                
                {/* Módulo 1: Desarrollo de habilidades empresariales */}
                <CourseAdvice 
                    title="Desarrollo de habilidades empresariales" 
                    subtitle="Inicia tu camino al éxito" 
                    img="./assets/img__course3.jpeg" 
                    color="#d4af37" 
                    id={1} 
                    pdfUrl="https://drive.google.com/uc?export=view&id=1OFRjI7Hg19WB8og7KEuvq7b-rWaAbLGc"
                    videoUrl="https://www.youtube.com/watch?v=CGEgfzKPF2s"
                />

                {/* Módulo 2: Planificación estratégica */}
                <CourseAdvice 
                    title="Planificación estratégica" 
                    subtitle="Rumbo al éxito comercial" 
                    img="./assets/img__course2.jpeg" 
                    color="#2563eb" 
                    id={2} 
                    pdfUrl="https://drive.google.com/uc?export=view&id=1xRnjx5mxI2oPxUUC0OzMdvysbfK458d0"
                    videoUrl="https://www.youtube.com/watch?v=ytDRakRWGkE"
                />

                {/* Módulo 3: Innovación y creatividad */}
                <CourseAdvice 
                    title="Innovación y creatividad" 
                    subtitle="Generando ideas disruptivas" 
                    img="./assets/img__course1.jpeg" 
                    color="#00f2fe"
                    id={3} 
                    pdfUrl="https://drive.google.com/uc?export=view&id=1iIcXL_cy1LXTiZH5MtpCx1xgPOYS7gbj"
                    videoUrl="https://www.youtube.com/watch?v=6ZIbwaaD3aM"
                />

                {/* Módulo 4: Gestión financiera */}
                <CourseAdvice 
                    title="Gestión financiera" 
                    subtitle="Optimización de recursos" 
                    img="./assets/img__course11.jpeg" 
                    color="#f59e0b"
                    id={4} 
                    pdfUrl="https://drive.google.com/uc?export=view&id=1bhRktYD6eRq4Xg4x6MwYXhzbmxnOUgNj"
                    videoUrl="https://www.youtube.com/watch?v=-qdVn4irS78"
                />

                {/* Módulo 5: Marketing y ventas */}
                <CourseAdvice 
                    title="Marketing y ventas" 
                    subtitle="Atrae, conecta y escala tu negocio" 
                    img="./assets/img__course5.jpeg" 
                    color="#f97316" 
                    id={5} 
                    pdfUrl="https://drive.google.com/uc?export=view&id=1jTxMw0mAqkYlTGChkNAkSJEWIlryVKo6"
                    videoUrl="https://www.youtube.com/watch?v=JJfZwzyI8tQ"
                />

                {/* Módulo 6: Desarrollo de productos/servicios */}
                <CourseAdvice 
                    title="Desarrollo de productos/servicios" 
                    subtitle="De la idea al mercado con valor real" 
                    img="./assets/img__course6.jpeg" 
                    color="#06b6d4" 
                    id={6} 
                    pdfUrl="https://drive.google.com/uc?export=view&id=1xTIuNIW8oVz2Gt89cLZI08_cqHFVSPcu"
                    videoUrl="https://www.youtube.com/watch?v=V1rdww1K4zg"
                />

                {/* Módulo 7: Gestión de recursos humanos */}
                <CourseAdvice 
                    title="Gestión de recursos humanos" 
                    subtitle="Liderazgo y desarrollo del talento" 
                    img="./assets/img__course7.jpeg" 
                    color="#a855f7" 
                    id={7} 
                    pdfUrl="https://drive.google.com/uc?export=view&id=1OJ2OlC01I7i_ahEa6aHqI3p9Z0MuBKFv"
                    videoUrl="https://www.youtube.com/watch?v=cT6NXkbuDjQ"
                />

                {/* Módulo 8: Tecnología y transformación digital */}
                <CourseAdvice 
                    title="Tecnología y transformación digital" 
                    subtitle="Optimización y automatización del futuro" 
                    img="./assets/img__course8.jpeg" 
                    color="#ec4899" 
                    id={8} 
                    pdfUrl="https://drive.google.com/uc?export=view&id=1DuP4y-wIlM_y0vF9HDW2g27byA-ty3wu"
                    videoUrl="https://www.youtube.com/watch?v=wPfUvWOFhAE"
                />

                {/* Módulo 9: Networking y colaboración */}
                <CourseAdvice 
                    title="Networking y colaboración" 
                    subtitle="Conectando metas" 
                    img="./assets/img__course2.jpeg" 
                    color="#4f46e5" 
                    id={9} 
                    pdfUrl="https://drive.google.com/uc?export=view&id=1OFRjI7Hg19WB8og7KEuvq7b-rWaAbLGc"
                    videoUrl="https://www.youtube.com/watch?v=CoaqbSu6n2Y"
                />

                {/* Módulo 10: Ética empresarial y responsabilidad social */}
                <CourseAdvice 
                    title="Ética empresarial y responsabilidad social" 
                    subtitle="Valores, transparencia y sostenibilidad" 
                    img="./assets/img__course10.jpeg" 
                    color="#10b981" 
                    id={10} 
                    pdfUrl="https://drive.google.com/uc?export=view&id=115-Ie3JlqcKQFkDiOcpTRblVWltO9WYO"
                    videoUrl="https://www.youtube.com/watch?v=c6Mz1hvckHM"
                />

            </section> {/* 🌟 CIERRE DE LA SECCIÓN ANIMADA 🌟 */}

            <IaButton />
        </section>
    );
};

export default LandingPage;