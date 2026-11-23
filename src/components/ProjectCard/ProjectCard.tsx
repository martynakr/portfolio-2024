import Button from "../Button/Button";
import Tag from "../Tag/Tag";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
    tech: string[];
}

const ProjectCard = ({ tech }: ProjectCardProps) => {
    return (
        <article className={styles.card}>
            <span className={styles.top} />
            <span className={styles.right} />
            <span className={styles.bottom} />
            <span className={styles.left} />

            <img src="https://www.placekittens.com/300/200" alt="" />
            <div>
                <h3>Project title</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quasi non, expedita dicta odio, amet cum eaque dolore eos
                    quod consequatur fugit, officiis quae dolores modi
                    doloremque incidunt molestiae dignissimos ducimus.
                </p>
                <div className={styles.tags}>
                    {tech.map((t) => (
                        <Tag key={t} text={t} size="small" />
                    ))}
                </div>
                <Button href="https://github.com/martynakr">
                    Check it out on GitHub
                </Button>
            </div>
        </article>
    );
};

export default ProjectCard;
