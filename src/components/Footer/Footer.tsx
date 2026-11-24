import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <span>
                <a href="https://www.linkedin.com/in/martyna-kr%C3%B3l-7a8230b5/">
                    LinkedIn
                </a>
            </span>
            <span>
                <a href="https://github.com/martynakr">GitHub</a>
            </span>
        </footer>
    );
};

export default Footer;
