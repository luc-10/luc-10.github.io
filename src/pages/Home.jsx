import Hero from "../components/Hero"
import VerticalBar from "../components/VerticalBar"
import { useState } from "react"
import InfoSection from "../components/InfoSection"

import unitnLogo from "../assets/unitnLogo.jpg"
import ntnuLogo from "../assets/ntnuLogo.png"
import cosiLogo from "../assets/cosiLogo.png"

function Home(){

    const [selectedItem, setSelectedItem] = useState(null)


    const experiences = [
        {
            title: "European Solidarity Corps Volunteering",
            organization: "Civic Organization and Solid Integration (COSI)",
            location: "Bucharest, Romania",
            startDate: new Date("2026-01-10"),
            endDate: new Date("2026-06-30"),
            color: "orange",
            image: cosiLogo,
            details: [
                "Designed and implemented monthly awareness campaigns on topics such as discrimination, tolerance, and youth opportunities.",
                "Planned and organized intercultural events, engaging diverse community members.",
                "Facilitated group activities in multicultural environments, promoting inclusion and cross-cultural dialogue."
            ]
        },
        {
            title: "Internship at University of Trento",
            organization: "University of Trento (UNITN)",
            location: "Trento, Italy",
            startDate: new Date("2025-08-01"),
            endDate: new Date("2025-10-10"),
            color: "purple",
            image: unitnLogo,
            details: [
                "Developed and improved heuristic algorithms for the Radiotherapy Scheduling Problem, modeled as a variation of the 1D Online Bin Packing Problem using Python.",
                "Evaluated algorithmic performance and solution quality through experimental analysis."
            ]
        }
    ]


    const educations = [
        {
            title: "Bachelor's Degree in Computer Science",
            organization: "University of Trento (UNITN)",
            location: "Trento, Italy",
            startDate: new Date("2022-09-13"),
            endDate: new Date("2025-11-17"),
            color: "red",
            image: unitnLogo,
            details: [
                "Final grade: 110 Cum Laude / 110"
            ]
        },
        {
            title: "Erasmus+ Exchange Program",
            organization: "Norwegian University of Science and Technology (NTNU)",
            location: "Trondheim, Norway",
            startDate: new Date("2025-01-06"),
            endDate: new Date("2025-06-06"),
            color: "blue",
            image: ntnuLogo,
            details: [
            ]
        },

    ]

    return (
        <div className="relative h-screen">
            <VerticalBar selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
            <div className="absolute flex justify-center items-center top-0 w-full h-full pointer-events-none">
                {selectedItem === "about" && <Hero/>}
                {selectedItem === "experience" && <InfoSection information={experiences}/>}
                {selectedItem === "education" && <InfoSection information={educations}/>}
            </div>
        </div>
    )
}

export default Home


/*


            <NavBar/>
            <Hero/>
            <div className="mt-[10%]">
                <TimeLines/>
            </div>
            <Projects/>
            
            
    */