import styles from "./H3.module.scss";

interface H3Props {
    children: React.ReactNode;
    color?: string;
}

const H3 = ({ children, color }: H3Props) => {
    return (
        <h3 className={styles.small_heading} style={{ color }}>
            {children}
        </h3>
    );
};

export default H3;
