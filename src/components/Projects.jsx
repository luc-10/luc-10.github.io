import Card from "./Card"
import pokerheimLogo from "../assets/pokerheimLogo.png"
import fragilepotionsLogo from "../assets/fragilepotionsLogo.svg"

function Projects(){
    const projects = [
        {
            title: "Distributed Elevator system",
            technologies: ["Golang", "UDP", "Git"],
            link: "https://github.com/luc-10/Elevators",
            image: "",
            details: "Designed and implemented a fault-tolerant distributed elevator system in Go using UDP peer-to-peer communication. Handled network unreliability (packet loss, congestion), node failures, and hardware faults through failure detection and automatic recovery mechanisms."
        },
        {
            title: "Fragile Potions",
            technologies: ["C#", "Godot", "Git"],
            link: "https://github.com/luc-10/FragileSokoban",
            image: fragilepotionsLogo,
            details: `Developed a puzzle game during "Mini Jam 200: Freedom" using Godot and C#. Implemented custom mechanics inspired by Sokoban, including group-based box movement and destructible crates, within a constrained time frame.`
        },
        {
            
            title: "PokerHeim",
            technologies: ["Java", "Python", "libGDX", "Firebase", "Git"],
            link: "https://github.com/luc-10/Pokerheim",
            image: pokerheimLogo,
            details: "Co-developed a real-time multiplayer Texas Hold’em mobile game using Java (libGDX) for the frontend and Python with Firestore for the backend. Worked on game state synchronization, client-server communication, and testing in an Agile team environment."
        },
        {
            title: "Advent of code 2025",
            technologies: ["Golang", "Git"],
            link: "https://github.com/luc-10/Advent-of-code-2025",
            image: "",
            details: "Solved 12 algorithmic challenges focusing on optimization and data structures."
        },
        {
            title: "Advent of code 2024",
            technologies: ["Typescript", "Git"],
            link: "https://github.com/luc-10/Advent-of-code-2024",
            image: "",
            details: "Solved 25 algorithmic challenges focusing on optimization and data structures."
        },
    ]

    return (
        <div id="projects" className="section mx-auto scroll-mt-48 my-48 border-2">
            
            <h1 className="uppercase text-4xl font-semibold w-2/3 mx-auto mb-4">Personal projects</h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <Card project={project}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects