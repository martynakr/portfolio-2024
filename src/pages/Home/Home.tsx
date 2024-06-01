import BendingLine from "../../components/BendingLine/BendingLine";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <header className={styles.container}>
                <h1 className={styles.heading}>MARTYNA KROL</h1>
                <div className={styles.line}>
                    <BendingLine />
                </div>
            </header>

            <main>
                <h3>
                    Software Developer{" "}
                    <span className={styles.divider}> | </span> Coach
                </h3>
                <p>
                    Check out out my work on{" "}
                    <a href="https://github.com/martynakr">Github</a>
                </p>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
