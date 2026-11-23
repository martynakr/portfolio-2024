import H3 from "../../components/typography/H3/H3";
import styles from "./About.module.scss";
import meImage from "../../assets/me.jpeg";

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <img
                src={meImage}
                alt="woman standing on a bridge"
                className={styles.image}
            />
            <div>
                <H3 className={styles.heading}>ABOUT ME</H3>
                <p>
                    I'm a Software Development Educator and Full Stack Developer
                    with a passion for building modern web applications and
                    helping aspiring developers grow. I teach an intensive
                    software development bootcamp, mentoring students through
                    programming concepts, debugging, and real-world development
                    practices.
                </p>
                <p>
                    I'm now looking to take the next step in my career within
                    the tech industry, where I can contribute to real-world
                    products and continue growing alongside an experienced team.
                </p>
            </div>
        </section>
    );
};

export default About;
