function Education(){
    const eductions = [
        {
            title: "Bachelor's Degree in Computer Science",
            school: "University of Trento (UNITN)",
            location: "Trento, Italy",
            period: "Sep 2022 - Nov 2025",
            finalGrade: "110 Cum Laude / 110"
        },
        {
            title: "Erasmus+ Exchange Program",
            school: "Norwegian University of Science and Technology (NTNU)",
            location: "Trondheim, Norway",
            period: "Jan 2025 - Jun 2025",
            finalGrade: ""
        },
        {
            title: "High School Diploma",
            school: "I.I.S. Principessa Maria Pia",
            location: "Taranto, Italy",
            period: "Sep 2016 - Jun 2021",
            finalGrade: "100 / 100"
        }
    ]

    return (
        <section id = "education">
            <h2>Education</h2>
            {eductions.map((edu, _) => (
                <div>
                    <h3>{edu.title}</h3>
                    <h4>{edu.period} {edu.location}</h4>
                    <span>{edu.school}</span>
                    <p>{edu.finalGrade}</p>
                </div>
            ))}
        </section>
    )
}

export default Education