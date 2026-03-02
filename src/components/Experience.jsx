function Experience(){
    const experiences = [
        {
            title: "University Internship",
            organization: "University of Trento (UNITN)",
            location: "Trento, Italy",
            period: "Aug 2025 - Oct 2025",
            details: [
                "Developed and improved heuristic algorithms for the Radiotherapy Scheduling Problem, modeled as a variation of the 1D Online Bin Packing Problem using Python.",
                "Evaluated algorithmic performance and solution quality through experimental analysis."
            ]
        },
        {
            title: "European Solidarity Corps Volunteering Project",
            organization: "Civic Organization and Solid Integration (COSI)",
            location: "Bucharest, Romania",
            period: "Jan 2026 - Jun 2026 (ongoing)",
            details: [
                "Designed and implemented monthly awareness campaigns on topics such as discrimination, tolerance, and youth opportunities.",
                "Planned and organized intercultural events, engaging diverse community members.",
                "Facilitated group activities in multicultural environments, promoting inclusion and cross-cultural dialogue."
            ]
        }
    ]
    
    return (
        <section id = "experience">
            <h2>Experience</h2>
            {experiences.map((exp, _) => (
                <div>
                    <h3>{exp.title}</h3>
                    <h3>{exp.period}</h3>
                    <span>{exp.organization}</span>
                    {exp.details.map((det, _) => (
                        <p>{det}</p>
                    ))}
                </div>
            ))}
        </section>
    )
}

export default Experience