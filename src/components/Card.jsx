import { FaGithub } from "react-icons/fa"

function Card({ project }){
    return (
        <div className="border-2 max-w-sm rounded-xl bg-[#3e3e3e] opacity-70 hover:opacity-90 duration-300 flex flex-col h-full p-4">
            
            <img src={project.image} className="w-2/3 p-6 mx-auto"></img>
            <div className="flex justify-between items-center mb-2">
                <h1 className="font-bold text-xl">{project.title}</h1>
                <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl"
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