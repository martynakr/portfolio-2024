import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer id="contact" className={styles.footer}>
            <span>
                <a
                    href="https://www.linkedin.com/in/martyna-krol-7a8230b5/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn
                </a>
            </span>
            <span>
                <a
                    href="https://github.com/martynakr"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </span>
        </footer>
    );
};

export default Footer;
