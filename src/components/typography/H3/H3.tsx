import styles from "./H3.module.scss";

interface H3Props {
    children: React.ReactNode;
    color?: string;
    className?: string;
}

const H3 = ({ children, color, className }: H3Props) => {
    return (
        <h3
            className={`${styles.small_heading} ${className ?? ""}`}
            style={{ color }}
        >
            {children}
        </h3>
    );
};

export default H3;
