import Hero from "../components/Hero"
import Projects from "../components/Projects"
import NavBar from "../components/NavBar"
import TimeLines from "../components/TimeLines"

function Home(){
    return (
        <div class="bg-[#240046]">
            <NavBar/>
            <Hero/>
            <TimeLines/>
            <Projects/>
        </div>
    )
}

export default Home