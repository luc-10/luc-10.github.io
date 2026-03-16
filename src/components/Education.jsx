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
            finalGrade: "Final grade: 100 / 100",
            image: "../assets/mariaPia.pngb"
        }
    ]

    return (
        <div id="education" className="relative h-[1500px] w-1/2 p-8">

            {/*full line*/}
            <div className="absolute right-8 top-0 h-[1500px] w-[2px] bg-white"></div>
            {/*degree*/}
            <div className="absolute right-8 top-[135px] h-[380px] w-8 group flex justify-end">
                <div className="w-[2px] h-full bg-red-500"></div>
                <div className="absolute right-10 top-0 hidden group-hover:block bg-black text-white text-sm p-3 rounded shadow-lg w-48">
                    Bachelor's Degree<br/>
                    Computer Science<br/>
                    Sep 2022 - Nov 2025
                </div>

            </div>
            
            
            {/*erasmus*/}
            <div className="absolute right-8 top-[190px] h-[50px] w-8 group flex justify-end">
                <div className="w-[2px] h-full bg-blue-500"></div>

                    <div className="absolute right-10 top-0 hidden group-hover:block bg-black text-white text-sm p-3 rounded shadow-lg w-48">
                    Erasmus<br/>
                </div>
            </div>

            {/*hs*/}
            <div className="absolute right-8 top-[670px] h-[570px] w-[2px] bg-green-500"></div>
        </div>
    )
}

export default Education