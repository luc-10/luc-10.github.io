import Card from "./Card"
import pokerheimLogo from "../assets/pokerheimLogo.png"
import fragilepotionsLogo from "../assets/fragilepotionsLogo.png"
import aocLogo from "../assets/aocLogo.png"
import elevatorsLogo from "../assets/elevatorsLogo.png"

function Projects(){
    const projects = [
        {
            title: "Distributed Elevator system",
            technologies: ["Golang", "Git"],
            link: "https://github.com/luc-10/Elevators",
            image: elevatorsLogo,
            details: "Fault-tolerant and distributed elevator system in Go using UDP peer-to-peer communication. Handled network unreliability (packet loss, congestion), node failures, and hardware faults through failure detection and automatic recovery mechanisms."
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
            title: "Advent of code",
            technologies: ["Golang", "Typescript", "Git"],
            link: "https://github.com/luc-10/Advent-of-code",
            image: aocLogo,
            details: "Solved algorithmic challenges focusing on optimization and data structures (years 2024 - 2025). "
        },
    ]

    return (
        <div id="projects" className="section mx-auto scroll-mt-48 ">
            
            <h1 className="uppercase text-4xl font-semibold w-2/3 mx-auto text-[#ff8500]">Personal projects</h1>
            <div className="justify-center flex">
                <div className="h-[2px] opacity-50 bg-[#ff6d00] mt-6 mb-2 w-2/3"></div>
            </div>
            <div className="flex justify-center p-8">
                <div className="grid grid-cols-3 gap-4">
                    {projects.map((project) => (
                        <Card project={project}/>
                    ))}
                </div>
            </div>
            <div className="justify-center flex">
                <div className="h-[2px] opacity-50 bg-[#ff6d00] w-2/3 mb-8"></div>
            </div>
        </div>
    )
}

export default Projects