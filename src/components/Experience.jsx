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
        <section id="experience" className="px-6 md:px-16 py-12">
            <h2 className = "text-2xl font-bold mb-2 uppercase">Experience</h2>
            <hr className = "border-black mb-6"></hr>
            {experiences.map((exp, index) => (
                <div key = {index} className = "mb-10 border-l-2 pl-6 color-black"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <div className = "flex justify-between items-start">
                        <span className = "text-xl font-bold"> {exp.title}</span>
                        <span className = "text-gray-400 text-lg">{exp.period}</span>
                    </div>
                    <div className = "flex justify-between items-start">
                        <span className = "text-lg">{exp.organization}</span>
                        <span className = "text-gray-400 text-lg">{exp.location}</span>
                    </div>
                    <div className={`overflow-hidden transition-all duration-1000 ${hoveredIndex === index ? 'max-h-32 mt-3' : 'max-h-0'}`}>
                        <div className = "mb-3"></div>
                        {exp.details.map((det, i) => (
                            <p className = "text-lg leading-relaxed">• {det}</p>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    )
}

export default Experience