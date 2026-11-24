import Button from "../Button/Button";
import Tag from "../Tag/Tag";
import styles from "./ProjectCard.module.scss";

export interface Project {
    id: string;
    title: string;
    image: string;
    description: string;
    tags: string[];
    github: string;
    live?: string;
}

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <article className={styles.card}>
            <svg className={styles.frame} aria-hidden="true">
                <rect width="100%" height="100%" rx="16" pathLength="1" />
            </svg>
            <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className={styles.image}
            />
            <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className={styles.tags}>
                    {project.tags.map((t) => (
                        <Tag key={t} text={t} size="small" />
                    ))}
                </div>
                <div className={styles.links}>
                    {project.live && (
                        <Button href={project.live}>Live</Button>
                    )}
                    <Button href={project.github}>GitHub</Button>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
