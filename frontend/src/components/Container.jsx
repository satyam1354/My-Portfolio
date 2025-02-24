import Feed from "./Feed"
import Header from "./Header"
import Projects from "./Projects"
import Footer from "./Footer"
import Contact from "./Contact"
import Experience from "./Experience"
import About from "./About"

const Container = () => {
    return (
        <>
            <Header />
            <hr />
            <Feed />
            <hr className="border-t-2 border-black " />
            <Projects />
            <hr className="border-t-2 border-black " />
            <About />
            <hr className="border-t-2 border-black " />
            <Experience />
            <hr className="border-t-2 border-black " />

            <Contact />
            <Footer />

        </>
    )
}
export default Container