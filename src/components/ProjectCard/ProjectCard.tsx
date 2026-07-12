import styles from "./ProjectCard.module.scss";

const ProjectCard = () => {
    return (
        <article className={styles.card}>
            <span className={styles.top} />
            <span className={styles.right} />
            <span className={styles.bottom} />
            <span className={styles.left} />
            <h3>Project title</h3>
            <img src="https://www.placekittens.com/300/200" alt="" />
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
                non, expedita dicta odio, amet cum eaque dolore eos quod
                consequatur fugit, officiis quae dolores modi doloremque
                incidunt molestiae dignissimos ducimus.
            </p>
            <button>Check it out on GitHub</button>
        </article>
    );
};

export default ProjectCard;
