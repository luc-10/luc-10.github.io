import Hero from "../components/Hero"
import Projects from "../components/Projects"
import NavBar from "../components/NavBar"
import TimeLines from "../components/TimeLines"

function Home(){
    return (
        <div className="bg-[#240046]">
            <NavBar/>
            <Hero/>
            <div className="mt-[10%]">
                <TimeLines/>
            </div>
            <Projects/>
        </div>
    )
}

export default Home