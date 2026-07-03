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
                    subtitle="Liderazgo, gestión del tiempo y toma de decisiones" 
                    img="./assets/img__course3.jpeg" 
                    color="#d4af37" 
                    id={1} 
                    pdfUrl="https://drive.google.com/file/d/1S_6Gya7cehrmjX9kLZ2HkHob241UvkMr/view?usp=sharing"
                    videoUrl="https://www.youtube.com/watch?v=CGEgfzKPF2s"
                />

                {/* Módulo 2: Planificación estratégica */}
                <CourseAdvice 
                    title="Planificación estratégica" 
                    subtitle="Diseña planes que aseguren el crecimiento" 
                    img="./assets/img__course2.jpeg" 
                    color="#2563eb" 
                    id={2} 
                    pdfUrl="https://drive.google.com/file/d/1MtsCpBCzSYc6Y0nQhjaPMtQttDaTWPQr/view?usp=sharing"
                    videoUrl="https://www.youtube.com/watch?v=ytDRakRWGkE"
                />

                {/* Módulo 3: Innovación y creatividad */}
                <CourseAdvice 
                    title="Innovación y creatividad" 
                    subtitle="¡Descubre cómo crear productos innovadores!" 
                    img="./assets/img__course1.jpeg" 
                    color="#00f2fe"
                    id={3} 
                    pdfUrl="https://drive.google.com/file/d/1aFt8lJcKUK751HbqZtlUPS3F46Y5khl2/view?usp=sharing"
                    videoUrl="https://www.youtube.com/watch?v=6ZIbwaaD3aM"
                />

                {/* Módulo 4: Gestión financiera */}
                <CourseAdvice 
                    title="Gestión financiera" 
                    subtitle="Domina el flujo de efectivo y la rentabilidad" 
                    img="./assets/img__course11.jpeg" 
                    color="#f59e0b"
                    id={4} 
                    pdfUrl="https://drive.google.com/file/d/1i1jQT8JJHHO1DBuDIQSx38ftYsCOSTBd/view?usp=sharing"
                    videoUrl="https://www.youtube.com/watch?v=-qdVn4irS78"
                />

                {/* Módulo 5: Marketing y ventas */}
                <CourseAdvice 
                    title="Marketing y ventas" 
                    subtitle="Atrae clientes, desarrolla tu marca y vende más" 
                    img="./assets/img__course5.jpeg" 
                    color="#f97316" 
                    id={5} 
                    pdfUrl="https://drive.google.com/file/d/1YY0bnoSXJqhxPXWg362QWUsu_lZG9Bm0/view?usp=sharing"
                    videoUrl="https://www.youtube.com/watch?v=JJfZwzyI8tQ"
                />

                {/* Módulo 6: Desarrollo de productos/servicios */}
                <CourseAdvice 
                    title="Desarrollo de productos/servicios" 
                    subtitle="Desde la idea hasta el mercado" 
                    img="./assets/img__course6.jpeg" 
                    color="#06b6d4" 
                    id={6} 
                    pdfUrl="https://drive.google.com/file/d/1z_uFjHk2kYbc-tJ4cuU5s5jUMrzey72n/view?usp=sharing"
                    videoUrl="https://www.youtube.com/watch?v=V1rdww1K4zg"
                />

                {/* Módulo 7: Gestión de recursos humanos */}
                <CourseAdvice 
                    title="Gestión de recursos humanos" 
                    subtitle="Forma y motiva a un equipo de alto rendimiento" 
                    img="./assets/img__course7.jpeg" 
                    color="#a855f7" 
                    id={7} 
                    pdfUrl="https://drive.google.com/file/d/1YYW51UtLaeCaUXDUBNbPU_WvOW5R6BIC/view?usp=sharing"
                    videoUrl="https://www.youtube.com/watch?v=cT6NXkbuDjQ"
                />

                {/* Módulo 8: Tecnología y transformación digital */}
                <CourseAdvice 
                    title="Tecnología y transformación digital" 
                    subtitle="Adapta tu negocio al mundo digital" 
                    img="./assets/img__course8.jpeg" 
                    color="#ec4899" 
                    id={8} 
                    pdfUrl="https://drive.google.com/file/d/1YKudS_0huUfUWKnbSz_gNRWu8GHI9fVU/view?usp=sharing"
                    videoUrl="https://www.youtube.com/watch?v=wPfUvWOFhAE"
                />

                {/* Módulo 9: Networking y colaboración */}
                <CourseAdvice 
                    title="Networking y colaboración" 
                    subtitle="Conecta con otros emprendedores y alianzas" 
                    img="./assets/img__course2.jpeg" 
                    color="#4f46e5" 
                    id={9} 
                    pdfUrl="https://drive.google.com/file/d/1YSmKdJnKXxZ9mL5pzxXDiMEN-AuQZ5R3/view?usp=sharing"
                    videoUrl="https://www.youtube.com/watch?v=CoaqbSu6n2Y"
                />

                {/* Módulo 10: Ética empresarial y responsabilidad social */}
                <CourseAdvice 
                    title="Ética empresarial y responsabilidad social" 
                    subtitle="¡Sé un líder responsable!" 
                    img="./assets/img__course10.jpeg" 
                    color="#10b981" 
                    id={10} 
                    pdfUrl="https://drive.google.com/file/d/1NmxSC_wcBK1TUW4x_EZoptN5eMuvuCac/view?usp=sharing"
                    videoUrl="https://www.youtube.com/watch?v=c6Mz1hvckHM"
                />

            </section> {/* 🌟 CIERRE DE LA SECCIÓN ANIMADA 🌟 */}

            <IaButton />
        </section>
    );
};

export default LandingPage;