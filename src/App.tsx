import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import About from "./sections/About/About";
import Home from "./sections/Home/Home";
import Projects from "./sections/Projects/Projects";
import TechStack from "./sections/TechStack/TechStack";

function App() {
    return (
        <>
            <Nav />
            <Home />
            <About />
            <TechStack />
            <Projects />
            <Footer />
        </>
    );
}

export default App;
