import Hero from "../components/Hero"
import VerticalBar from "../components/VerticalBar"
import { useState, useEffect } from "react"
import InfoSection from "../components/InfoSection"
import Cards from "../components/Cards"

import unitnLogo from "../assets/unitnLogo.jpg"
import ntnuLogo from "../assets/ntnuLogo.png"
import cosiLogo from "../assets/cosiLogo.png"


function Home(){

    const experiences = [
        {
            title: "European Solidarity Corps Volunteering",
            organization: "Civic Organization and Solid Integration (COSI)",
            location: "Bucharest, Romania",
            startDate: new Date("2026-01-10"),
            endDate: new Date("2026-06-30"),
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
            image: ntnuLogo,
            details: [
            ]
        },

    ]

    const projects = [
        {
            title: "Fragile Potions",
            organization: "",
            location: "",
            startDate: null,
            endDate: null,
            details: [
                "Variant of the classic Sokoban puzzle game featuring group-based box movement and destructible crates after repeated collisions"
            ]
        },
        {
            title: "PokerHeim",
            organization: "",
            location: "",
            startDate: null,
            endDate: null,
            details: [
                "Multiplayer real-time Texas Hold’em poker mobile game developed as a team-based Agile project"
            ]
        },
        {
            title: "Distributed Elevator system",
            organization: "",
            location: "",
            startDate: null,
            endDate: null,
            details: [
                "Fault-tolerant real-time distributed system where three elevators coordinate via peer-to-peer communication. Implements failure detection and takeover on node or network faults, with error handling for motor stalls and door malfunctions"
            ]
        }
    ]


    const [selectedItem, setSelectedItem] = useState(null)
    const baseColors = [
        "#00B4D8", "#FF6B35", "#7B2FFF", "#00C896", "#FFB800", "#FF2D78",
        "#FF3366", "#00E5FF", "#AAFF00", "#FF6F00", "#9D00FF", "#00FFAB"
    ]
    const [colors, setColors] = useState([...baseColors])

    useEffect(() => {
        if (selectedItem === null) return
        setColors([...baseColors].sort(() => Math.random() - 0.5))
    }, [selectedItem])


    return (
        <div className="relative h-screen">
            <VerticalBar selectedItem={selectedItem} setSelectedItem={setSelectedItem} colors={colors}/>
            <div className="absolute flex justify-center items-center top-0 w-full h-full pointer-events-none">
                {selectedItem === "about" && <Hero/>}
                {selectedItem === "experience" && <InfoSection information={experiences} colors={colors}/>}
                {selectedItem === "education" && <InfoSection information={educations} colors={colors}/>}
                {selectedItem === "projects" && <Cards information={projects} colors={colors}/>}
            </div>
        </div>
    )
}

export default Home

