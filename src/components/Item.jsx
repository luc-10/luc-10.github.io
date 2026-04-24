import { FaExternalLinkAlt } from "react-icons/fa"

function Item({ info }){
    return(
        <div className="p-8">
            <div className="flex justify-between">
                <h1 className="font-bold text-xl">{info.title}</h1>

                <span className="text-base opacity-50">
                    {info.startDate.toLocaleDateString()} • {info.endDate.toLocaleDateString()}
                </span>
            </div>
            <div className="flex justify-between">
                <a 
                    href={info.link} target="_black" 
                    className="text-xl inline-flex items-center gap-2 hover:text-[#ff9e00] transition-all duration-300"
                >{info.organization} <FaExternalLinkAlt/></a>
                <span className="text-base opacity-50">{info.location}</span>
            </div>
            <div className="m-4">
                {info.details.map((detail) => (
                    <p className="text-lg">• {detail}</p>
                ))}
            </div>
        </div>
    )
}

export default Item