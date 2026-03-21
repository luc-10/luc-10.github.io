import Hero from "../components/Hero"
import TimeLine from "../components/TimeLine"
import VerticalBar from "../components/VerticalBar"
import { useState } from "react"
import { motion } from "framer-motion"

function Home(){

    const [selectedItem, setSelectedItem] = useState(null)


    const experiences = [
        {
            title: "European Solidarity Corps Volunteering Project",
            organization: "Civic Organization and Solid Integration (COSI)",
            location: "Bucharest, Romania",
            startDate: new Date("2026-01-10"),
            endDate: new Date("2026-06-30"),
            color: "purple",
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
            color: "orange",
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
            startDate: new Date("2022-09-14"),
            endDate: new Date("2025-11-17"),
            color: "red",
            details: [
                "Final grade: 110 Cum Laude / 110"
            ]
        },
        {
            title: "Erasmus+ Exchange Program",
            organization: "Erasmus+ Study Exchange Program",
            location: "Trondheim, Norway",
            startDate: new Date("2025-01-06"),
            endDate: new Date("2025-06-06"),
            color: "blue",
            details: [
            ]
        },

    ]

    return (
        <div className="relative h-screen">
            <VerticalBar selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
            <motion.div className="absolute right-0 top-0 h-full w-1/2 pointer-events-none"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                {selectedItem === "about" && <Hero/>}
                {selectedItem === "experience" && <TimeLine information={experiences}/>}
                {selectedItem === "education" && <TimeLine information={educations}/>}
            </motion.div>
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