import ProjectCard from "../../components/ProjectCard/ProjectCard";
import H3 from "../../components/typography/H3/H3";
import styles from "./Projects.module.scss";

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <H3 className={styles.heading}>PROJECTS</H3>
            <div className={styles.list}>
                <ProjectCard tech={["React", "TypeScript", "SCSS"]} />
                <ProjectCard tech={["Java", "Spring Boot", "SQL"]} />
                <ProjectCard tech={["Node.js", "Express", "AWS"]} />
            </div>
        </section>
    );
};

export default Projects;
