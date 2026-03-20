import unitnLogo from "../assets/unitnLogo.jpg"
import ntnuLogo from "../assets/ntnuLogo.png"
import { useState } from "react"
import { motion } from "framer-motion"

function Education(){

    const [hoveredLine, setHoveredLine] = useState(null)

    return (
        <div id="education" className="relative h-[750px] w-1/2 p-8">

            {/*full line*/}
            <div className="absolute right-8 top-0 h-[750px] w-[2px] bg-white"></div>
            {/*degree*/}
            <div className="absolute right-8 top-[135px] h-[380px] w-8 flex justify-end"
            
                onMouseEnter={() => setHoveredLine("degree")}
                onMouseLeave={() => setHoveredLine(null)}>
                <div className="w-[2px] h-full bg-red-500"></div>


            </div>
            
            
            {/*erasmus*/}
            <div className="absolute right-8 top-[190px] h-[50px] w-8 group flex justify-end"

                onMouseEnter={() => setHoveredLine("erasmus")}
                onMouseLeave={() => setHoveredLine(null)}>

                <div className="w-[2px] h-full bg-blue-500"></div>

            </div>

            <div className="text-5xl uppercase -translate-x-1/2 font-bold">
                Education
            </div>
            <div className={`absolute top-[20%] -translate-x-1/2  border-black border-2 p-6 w-[125%] mx-auto bg-white rounded-2xl opacity-50 hover:opacity-75 duration-300
                ${hoveredLine === "degree" ? "opacity-75" : "opacity-50"}`}>
                <img src={unitnLogo} className="pb-10 w-[75%] mx-auto"></img>
                <p className="text-2xl font-bold">Bachelor's Degree in Computer Science</p>
                <p>University of Trento (UNITN)</p>
                <p>Trento, Italy</p>
                <p>Sep 2022 • Nov 2025</p>
                <p>Final grade: 110 Cum Laude / 110</p>

            </div>

            <div className={`absolute top-[70%] -translate-x-1/2  border-black border-2 p-6 w-[125%] mx-auto bg-white rounded-2xl opacity-50 hover:opacity-75 duration-300
                ${hoveredLine === "erasmus" ? "opacity-75" : "opacity-50"}`}>
                <img src={ntnuLogo} className="pb-10 w-[75%] mx-auto"></img>
                <p className="text-2xl font-bold">Erasmus+ Exchange Program</p>
                <p>Norwegian University of Science and Technology (NTNU)</p>
                <p>Trondheim, Norway</p>
                <p>Jan 2025 • Jun 2025</p>

            </div>
        </div>
    )
}

export default Education