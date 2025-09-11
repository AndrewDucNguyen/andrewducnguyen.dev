import Hero from "@/app/component/Hero";
import About from "@/app/component/About";
import Projects from "@/app/component/Projects";
import Skills from "@/app/component/Skills";
import Contact from "@/app/component/Contact";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
        </>
    );
};

export default Home;