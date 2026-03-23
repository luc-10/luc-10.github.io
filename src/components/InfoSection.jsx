import TimeLine from "./TimeLine"
import Cards from "./Cards"
import { useState } from "react"

function InfoSection({ information, colors }){

    const [hoveredCard, setHoveredCard] = useState(null)
    return (
        <div>
            <TimeLine information={information} hoveredCard={hoveredCard} colors={colors}/>
            <Cards information={information} setHoveredCard={setHoveredCard} colors={colors}/>
        </div>
    )
}

export default InfoSection