import GitOriginal from "devicons-react/icons/GitOriginal"
import GoOriginalWordmark from "devicons-react/icons/GoOriginalWordmark"
import JavaOriginal from "devicons-react/icons/JavaOriginal"
import PythonOriginal from "devicons-react/icons/PythonOriginal"
import TypescriptOriginal from "devicons-react/icons/TypescriptOriginal"
import CsharpOriginal from "devicons-react/icons/CsharpOriginal"
import GodotOriginal from "devicons-react/icons/GodotOriginal"
import FirebaseOriginal from "devicons-react/icons/FirebaseOriginal"
import LibgdxOriginal from "devicons-react/icons/LibgdxOriginal"
import { FaGithub } from "react-icons/fa"



function Card({ project }) {

    const techIcons = {
        "libGDX": LibgdxOriginal,
        "Python": PythonOriginal,
        "Java": JavaOriginal,
        "Golang": GoOriginalWordmark,
        "Git": GitOriginal,
        "Firebase": FirebaseOriginal,
        "C#": CsharpOriginal,
        "Godot": GodotOriginal,
        "Typescript": TypescriptOriginal
    }

    function TechIcon({name}){

        const Icon = techIcons[name]
        if (!Icon) return null

        return <Icon className="icon"/>
    }

    return (
        <div className="group relative border-2 transition-all p-4 max-w-sm rounded-xl bg-[#1e1e1e] opacity-70 hover:opacity-90 duration-300 flex flex-col h-full overflow-hidden 
        hover:border-[#ff9e00]">

            <div className="absolute top-0 right-0 w-16 h-16 bg-[#d4d4d4] rounded-bl-full flex justify-end transition-all duration-300 group-hover:bg-[#ff9e00]">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-4xl text-black hover:text-[#d4d4d4] transition"
                >
                    <FaGithub className="mr-2 mt-2"/>
                </a>
            </div>

            <img src={project.image} className="w-2/3 p-6 mx-auto" />

            <div className="flex justify-between items-center mb-2">
                <h1 className="font-bold text-xl">{project.title}</h1>
            </div>

            <p className="flex-grow">{project.details}</p>

            <div className="flex justify-center gap-4 mt-4 bg-[#d4d4d4] rounded-xl p-2">
            {project.technologies.map((tech) => (
                <TechIcon key={tech} name={tech} />
            ))}
            </div>

        </div>
    )
}

export default Card