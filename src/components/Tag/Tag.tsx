import styles from "./Tag.module.scss";

interface TagProps {
    text: string;
}
const Tag = ({ text }: TagProps) => {
    return <div className={styles.tag}>{text}</div>;
};

export default Tag;
