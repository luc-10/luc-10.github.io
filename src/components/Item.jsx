import { FaExternalLinkAlt } from "react-icons/fa"

function Item({ info }){
    return(
        <div className="p-8">
            <div className="flex flex-col md:flex-row md:justify-between gap-1">
                <h1 className="font-bold text-lg md:text-xl">{info.title}</h1>

                <span className="text-sm md:text-base opacity-50">
                    {info.startDate.toLocaleDateString()} • {info.endDate.toLocaleDateString()}
                </span>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-1">
                <a 
                    href={info.link} target="_black" rel="noopener noreferrer"
                    className="text-base md:text-xl inline-flex items-center gap-2 hover:text-[#ff9e00] transition-all duration-300"
                >{info.organization} <FaExternalLinkAlt/></a>
                <span className="text-sm md:text-base opacity-50">{info.location}</span>
            </div>
            <div className="mt-4 space-y-2">
                {info.details.map((detail, i) => (
                    <p key={i} className="text-sm md:text-lg">• {detail}</p>
                ))}
            </div>
        </div>
    )
}

export default Item