import styles from "./Button.module.scss";

interface ButtonProps {
    children: React.ReactNode;
    href?: string;
}

const Button = ({ children, href }: ButtonProps) => {
    if (href) {
        return (
            <a
                className={styles.button}
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                {children}
            </a>
        );
    }
    return <button className={styles.button}>{children}</button>;
};

export default Button;
