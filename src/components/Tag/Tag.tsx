import styles from "./Tag.module.scss";

interface TagProps {
    text: string;
    size?: "default" | "small";
}
const Tag = ({ text, size = "default" }: TagProps) => {
    const className =
        size === "small" ? `${styles.tag} ${styles.small}` : styles.tag;
    return <div className={className}>{text}</div>;
};

export default Tag;
