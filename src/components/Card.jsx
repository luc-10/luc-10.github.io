import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

function Card({ info, setHoveredCard, expanded, onToggle}){
    return (
            <div key={info.title} className="bg-[#FFFFFF] border-4 rounded-xl p-4 pointer-events-auto opacity-75 hover:opacity-90 duration-300"
                style = {{ 
                        width: window.innerWidth /4 + "px", 
                        borderColor: info.color
                }}

                    onMouseDown={(e) => e.stopPropagation()}
                    onMouseEnter={() => setHoveredCard(info.title)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onClick={onToggle}
                >
                    <img src={info.image} className="p-4 mb-4 w-full"></img>
                    <div className="px-4">
                        <p className="font-bold text-xl">{info.title}</p>
                        <div className="my-2">
                            <a href="https://cosiromania.com/" target="_black">{info.organization}</a>
                            <br/>
                            <span className="text-gray-500 text-sm">{info.location}</span>
                            <span className="text-gray-500 text-sm float-right">{info.startDate.toLocaleDateString()} • {info.endDate.toLocaleDateString()}</span>
                        </div>
                        <motion.div className="overflow-hidden"
                            animate={{ height: expanded ? "auto" : 0 }}
                            initial={{ height: 0 }}
                        >
                        {info.details.map(detail => (
                            <p>• {detail}</p>
                        ))}
                        </motion.div>
                            <motion.div
                                className="w-full flex justify-center"
                                animate={{ rotate: expanded ? 180 : 0 }}
                                transition={{ duration: 0.3 }}

                            >
                            <ChevronDown size={48} color={info.color}/>
                            </motion.div>

                    </div>
                </div>
    )
}

export default Card