import Tag from "../../components/Tag/Tag";
import H3 from "../../components/typography/H3/H3";
import styles from "./TechStack.module.scss";

const techStack = [
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "SCSS" },
    { id: 4, name: "JavaScript" },
    { id: 5, name: "TypeScript" },
    { id: 6, name: "Java" },
    { id: 7, name: "SQL" },

    { id: 8, name: "React" },
    { id: 9, name: "Vue.js" },

    { id: 10, name: "Node.js" },
    { id: 11, name: "Express" },
    { id: 12, name: "NestJS" },
    { id: 13, name: "Spring Boot" },
    { id: 14, name: "AWS" },
    { id: 15, name: "Claude Code" },
];

const TechStack = () => {
    return (
        <section id="tech-stack" className={styles.tech_stack}>
            <H3 className={styles.heading}>TECH STACK</H3>
            <div className={styles.list}>
                {techStack.map((t) => (
                    <Tag key={t.id} text={t.name} />
                ))}
            </div>
        </section>
    );
};

export default TechStack;
