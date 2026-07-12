import Tag from "../../components/Tag/Tag";
import H3 from "../../components/typography/H3/H3";
import styles from "./TechStack.module.scss";

const techStack = [
    {
        id: 1,
        name: "HTML",
    },
    {
        id: 2,
        name: "CSS",
    },
    {
        id: 3,
        name: "SCSS",
    },
    {
        id: 4,
        name: "JavaScript",
    },
    {
        id: 5,
        name: "TypeScript",
    },
    {
        id: 6,
        name: "React",
    },
    {
        id: 7,
        name: "Java",
    },
    {
        id: 8,
        name: "Spring Boot",
    },
    {
        id: 9,
        name: "Nest js",
    },
    {
        id: 10,
        name: "SQL",
    },
    {
        id: 11,
        name: "AWS",
    },
];

const TechStack = () => {
    return (
        <section className={styles.tech_stack}>
            <H3 color="white">TECH STACK</H3>
            <div className={styles.list}>
                {techStack.map((t) => (
                    <Tag key={t.id} text={t.name} />
                ))}
            </div>
        </section>
    );
};

export default TechStack;
