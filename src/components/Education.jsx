function Education(){
    const educations = [
        {
            title: "Bachelor's Degree in Computer Science",
            school: "University of Trento (UNITN)",
            location: "Trento, Italy",
            period: "Sep 2022 • Nov 2025",
            finalGrade: "Final grade: 110 Cum Laude / 110"
        },
        {
            title: "Erasmus+ Exchange Program",
            school: "Norwegian University of Science and Technology (NTNU)",
            location: "Trondheim, Norway",
            period: "Jan 2025 • Jun 2025",
            finalGrade: ""
        },
        {
            title: "High School Diploma",
            school: "I.I.S. Principessa Maria Pia",
            location: "Taranto, Italy",
            period: "Sep 2016 • Jun 2021",
            finalGrade: "Final grade: 100 / 100"
        }
    ]

    return (
        <section id="education" className="px-6 md:px-16 py-12">
            <h2 className = "text-2xl font-bold mb-2 uppercase">Education</h2>
            <hr className = "border-black mb-6"></hr>
            {educations.map((edu, index) => (
                <div key = {index} className = "mb-10 border-l-2 pl-6 color-black">
                    <div className = "flex justify-between items-start">
                        <span className = "text-xl font-bold"> {edu.title}</span>
                        <span className = "text-gray-400 text-lg">{edu.period}</span>
                    </div>
                    <div className = "flex justify-between items-start">
                        <span className = "text-lg">{edu.school}</span>
                        <span className = "text-gray-400 text-lg">{edu.location}</span>
                    </div>
                    <span className = "text-lg">{edu.finalGrade}</span>
                </div>
            ))}
        </section>
    )
}

export default Education