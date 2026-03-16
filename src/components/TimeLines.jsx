import Experience from "./Experience"
import Education from "./Education"

function TimeLines(){
    return (
        <div className="grid grid-cols-3 grid-cols-[1fr_auto_1fr] ">
            <div className="flex justify-end">
                <Education/>
            </div>
            <div className="flex flex-col items-center w-[10px] text-xl -translate-y-[60px]">
                <p className="h-[120px] flex items-center justify-center">2027</p>
                <p className="h-[120px] flex items-center justify-center">2026</p>
                <p className="h-[120px] flex items-center justify-center">2025</p>
                <p className="h-[120px] flex items-center justify-center">2024</p>
                <p className="h-[120px] flex items-center justify-center">2023</p>
                <p className="h-[120px] flex items-center justify-center">2022</p>
                <p className="h-[120px] flex items-center justify-center">2021</p>
            </div>
            <div className="flex justify-start">
                <Experience/>
            </div>
        </div>
    )
}

export default TimeLines