import { useState } from 'react'

function Experience(){
    const experiences = [
        {
            title: "European Solidarity Corps Volunteering Project",
            organization: "Civic Organization and Solid Integration (COSI)",
            location: "Bucharest, Romania",
            period: "Jan 2026 • Jun 2026 (ongoing)",
            details: [
                "Designed and implemented monthly awareness campaigns on topics such as discrimination, tolerance, and youth opportunities.",
                "Planned and organized intercultural events, engaging diverse community members.",
                "Facilitated group activities in multicultural environments, promoting inclusion and cross-cultural dialogue."
            ]
        },
        {
            title: "Internship at University of Trento",
            organization: "University of Trento (UNITN)",
            location: "Trento, Italy",
            period: "Aug 2025 • Oct 2025",
            details: [
                "Developed and improved heuristic algorithms for the Radiotherapy Scheduling Problem, modeled as a variation of the 1D Online Bin Packing Problem using Python.",
                "Evaluated algorithmic performance and solution quality through experimental analysis."
            ]
        }
    ]

    const [hoveredIndex, setHoveredIndex] = useState(null)

    return (
        <div id="experience" className="relative h-[1500px] min-w-1/2 p-8">
            
            <div className="absolute left-8 top-0 h-[1500px] w-[2px] bg-white"></div>


            <div className="absolute left-8 top-[60px] h-[55px] w-8 group flex justify-start">
                <div className="w-[2px] h-full bg-green-500"></div>
                <div className="absolute right-10 top-0 hidden group-hover:block bg-black text-white text-sm p-3 rounded shadow-lg w-48">
                    COSI<br/>

                </div>

            </div>
            <div className="absolute left-8 top-[150px] h-[25px] w-8 group flex justify-start">
                <div className="w-[2px] h-full bg-red-500"></div>
                <div className="absolute right-10 top-0 hidden group-hover:block bg-black text-white text-sm p-3 rounded shadow-lg w-48">
                    Internship<br/>

                </div>

            </div>
            
        

        </div>

        
    )
}

export default Experience