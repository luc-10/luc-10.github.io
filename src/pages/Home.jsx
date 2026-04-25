
import NavBar from "../components/NavBar"
import About from "../components/About"
import InfoSection from "../components/InfoSection"
import Projects from "../components/Projects"
import GridBg from "../components/GridBg"

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
                "Designed and implemented monthly awareness campaigns on topics such as discrimination, solidarity, and youth opportunities.",
                "Planned, organized and facilitated intercultural events, engaging diverse community members, promoting inclusion and cross-cultural dialogue.",
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
                `Developed and improved heuristic algorithms for the "Radiotherapy Scheduling Problem", modeled as a variation of the "1D Online Bin Packing Problem" using Python.`,
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
        {
            title: "High School diploma",
            organization: "I.I.S Principessa Maria Pia",
            location: "Taranto, Italy",
            startDate: new Date("2016-09-12"),
            endDate: new Date("2021-06-28"),
            link: "https://www.iismariapia.it/",
            details: [
                "Final grade: 100 / 100"
            ]
        }

    ]

    return (
        <div>
            <GridBg>
                <NavBar/>
                <About/>
                <InfoSection title="experience" information={experiences}/>
                <InfoSection title="education" information={educations}/>
                <Projects/>
            </GridBg>
        </div>
    )
}

export default Home

