import BendingLine from "../../components/BendingLine/BendingLine";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <header className={styles.container}>
                <h1 className={styles.heading}>MARTYNA KRÓL</h1>
                <div className={styles.line}>
                    <BendingLine />
                </div>
            </header>

            <main>
                <h3>
                    Software Developer
                    <span className={styles.divider}> | </span> Educator
                </h3>
                {/* <p>
                    Check out out my work on{" "}
                    <a href="https://github.com/martynakr">Github</a>
                </p> */}
                {/* <About /> */}
            </main>
            {/* 
            <Footer /> */}
        </div>
    );
};

export default Home;
