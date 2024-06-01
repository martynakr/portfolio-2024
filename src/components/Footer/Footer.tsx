import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <span className={styles.span}>0424 802 218</span>
            <span className={styles.span}>martyna.krool@gmail.com</span>
            <span>
                <a href="https://www.linkedin.com/in/martyna-kr%C3%B3l-7a8230b5/">
                    LinkedIn
                </a>
            </span>
        </footer>
    );
};

export default Footer;
