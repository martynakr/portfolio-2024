import BendingLine from "../../components/BendingLine/BendingLine";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <header className={styles.container}>
                <h1 className={`${styles.heading} ${styles.fadeUp}`}>
                    MARTYNA KRÓL
                </h1>
                <div className={styles.line}>
                    <BendingLine />
                </div>
            </header>

            <main>
                <h3
                    className={`${styles.roles} ${styles.fadeUp} ${styles.delay1}`}
                >
                    Software Developer
                    <span className={styles.divider}> | </span> Educator
                </h3>

                {/* <About /> */}
            </main>
            {/* 
            <Footer /> */}
        </div>
    );
};

export default Home;
