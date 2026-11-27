import BendingLine from "../../components/BendingLine/BendingLine";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <header className={styles.container}>
                <h1 className={`${styles.heading} ${styles.fadeUp}`}>
                    <span className={styles.word}>MARTYNA</span>{" "}
                    <span className={styles.word}>KRÓL</span>
                </h1>
                <div className={styles.line}>
                    <BendingLine />
                </div>
            </header>

            <main>
                <h3
                    className={`${styles.roles} ${styles.fadeUp} ${styles.delay1}`}
                >
                    <span className={styles.word}>Software Engineer</span>
                    <span className={styles.word}>
                        <span className={styles.divider}> | </span>Technical
                        Trainer
                    </span>
                </h3>

                {/* <About /> */}
            </main>
            {/* 
            <Footer /> */}
        </div>
    );
};

export default Home;
