import ProjectCard, { Project } from "../../components/ProjectCard/ProjectCard";
import H3 from "../../components/typography/H3/H3";
import projects from "./project-data.json";
import styles from "./Projects.module.scss";

const Projects = () => {
    return (
        <section id="projects" className={styles.projects}>
            <H3 className={styles.heading}>PROJECTS</H3>
            <div className={styles.list}>
                {(projects as Project[]).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
