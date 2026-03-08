import Experience from "../components/Experience"
import Hero from "../components/Hero"
import Education from "../components/Education"
import Projects from "../components/Projects"

function Home(){
    return (
        <div>
            <Hero/>
            <Experience/>
            <Education/>
            <Projects/>
        </div>
    )
}

export default Home