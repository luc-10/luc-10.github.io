import { FaGithub } from "react-icons/fa"
import { techIcons } from "../pages/Home"

function Card({ project }){
    return (
        <div className="border-2 max-w-sm rounded-xl bg-[#292929] flex flex-col h-full p-4">
            
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-bold text-xl">{project.title}</h1>
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl"
                >
                    <FaGithub/>
                </a>
            </div>

            <p className="flex-grow">
                {project.details}
            </p>

            <div className="flex justify-center mt-4 text-[#999999]">
                {project.technologies.join(" | ")}
            </div>
        </div>
    )
}
export default Card