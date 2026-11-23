import styles from "./Nav.module.scss";

const links = [
    { href: "#about", label: "About" },
    { href: "#tech-stack", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
];

const Nav = () => {
    return (
        <nav className={styles.nav}>
            {links.map((link) => (
                <a key={link.href} href={link.href} className={styles.link}>
                    {link.label}
                </a>
            ))}
        </nav>
    );
};

export default Nav;
