import { clamp } from "framer-motion"

function TimeLine({ information, hoveredCard, colors }){

    const LINE_HEIGHT = window.innerHeight * 2/3


    const maxDate = new Date() //maxDate = now

    const minDate = new Date(Math.min(...information.map(info => info.startDate)))
    minDate.setMonth(11)
    minDate.setDate(31)
    minDate.setFullYear(minDate.getFullYear()-1)


    const visibleInfo = information.filter(info => info.startDate <= maxDate)
    const clampedInfo = visibleInfo.map(info => ({
        ...info,
        endDate: info.endDate > maxDate ? maxDate : info.endDate,
        ongoing: info.endDate > maxDate
    }))
    const ongoingIndex = clampedInfo.findIndex(info => info.ongoing)
    const ongoingInfo = ongoingIndex !== -1 ? clampedInfo[ongoingIndex] : null

    const totalMonths = (maxDate-minDate) / (1000 * 60 * 60 * 24 * 30)
    const MONTH_PX = LINE_HEIGHT / totalMonths

    const toPx = (date) => {
        return LINE_HEIGHT - ((date-minDate) / (1000 * 60 * 60 * 24 * 30) * MONTH_PX)
    }


    const getYears = () => {
        const years = []
        const startYear = minDate.getFullYear()
        const endYear = maxDate.getFullYear()

        for (let year = startYear+1; year<=endYear; year++) {
            const date = new Date(year, 0, 1)
            years.push({ year, px: toPx(date)})
        }

        return years
    }

    const years = getYears()

    return (
        <div style={{ transform: `translateX(${window.innerWidth/4}px)`}}>
            <div className=" relative flex flex-col items-center justify-center h-screen w-[2px]">

                <div className="w-full h-[100px] duration-300"
                    style={{ 
                        backgroundImage: `linear-gradient(to bottom, transparent, ${ongoingInfo ? colors[ongoingIndex] : "white"})`,
                        width: `${ongoingInfo ? hoveredCard===ongoingInfo.title ? "16px" : "4px" : "2px"}`

                    }}
                ></div>

                <div className="w-full bg-white"
                    style={{ height: LINE_HEIGHT + "px" }}
                ></div>

                <div className="w-full h-[100px] bg-gradient-to-b from-white to-transparent"></div>

                {clampedInfo.map((info,i) => {

                    const endPx = toPx(info.endDate)
                    const startPx = toPx(info.startDate)
                    return (
                        <div key = {i} className="absolute duration-300"
                        style={{
                            backgroundColor: colors[i],
                            top: endPx+((window.innerHeight-LINE_HEIGHT)/2)+"px", 
                            height: (startPx-endPx)+"px",
                            width: `${hoveredCard===info.title ? "16px" : "4px"}`
                            }}>

                        </div>
                    )
                })}
            </div>
            <div className="absolute flex items-center text-white -translate-y-1/2 whitespace-nowrap translate-x-[12px] text-xl"
                style={{
                    top: toPx(maxDate)+((window.innerHeight - LINE_HEIGHT)/2)+"px",

                }}
            >
                <span> ← NOW</span>
            </div>

                {years.map(year => (
                    <div key={year.year} className="absolute flex items-center text-white -translate-y-1/2 translate-x-[12px] whitespace-nowrap text-xl"
                        style={{
                            top: year.px+((window.innerHeight-LINE_HEIGHT)/2)+"px",

                        }}
                    >
                        <span>← {year.year}</span>
                    </div>
                ))}
        </div>
    )
}

export default TimeLine