
import NavBar from "../components/NavBar"
import About from "../components/About"
import InfoSection from "../components/InfoSection"
import Projects from "../components/Projects"

import { GoOriginal, GitOriginal, JavaOriginal, 
    PythonOriginal, TypescriptOriginal, GodotOriginal, 
    FirebaseOriginal, CsharpOriginal } from "devicons-react"


export const techIcons = {
    Golang: <GoOriginal />,
    Git: <GitOriginal />,
    Java: <JavaOriginal title="Java" />,
    Python: <PythonOriginal title="Python" />,
    Typescript: <TypescriptOriginal title="Typescript" />,
    Godot: <GodotOriginal title="Godot" />,
    Firebase: <FirebaseOriginal title="Firestore" />,
    "C#": <CsharpOriginal title="C#" />,
}

function Home(){

    const experiences = [
        {
            title: "European Solidarity Corps Volunteering",
            organization: "Civic Organization and Solid Integration (COSI)",
            location: "Bucharest, Romania",
            startDate: new Date("2026-01-10"),
            endDate: new Date("2026-06-30"),
            link: "https://cosiromania.com",
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
            link: "https://www.unitn.it/en",
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
            link: "https://www.unitn.it/en",
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
            link: "https://www.ntnu.edu/",
            details: [
            ]
        },

    ]



    const baseColors = [
        
        "#FF3366", "#FF9933", "#CCFF33", "#33FF33", "#33FFCC", "#3399FF", "#6633FF", "#FF33FF"
    ]

    return (
        <div>
            <NavBar/>
            <About/>
            <InfoSection title="experience" information={experiences}/>
            <InfoSection title="education" information={educations}/>
            <Projects/>
        </div>
    )
}

export default Home

