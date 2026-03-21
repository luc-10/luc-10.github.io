import TimeLine from "./TimeLine"
import Cards from "./Cards"
import { useState } from "react"

function InfoSection({ information }){

    const [hoveredCard, setHoveredCard] = useState(null)
    return (
        <div>
            <TimeLine information={information} hoveredCard={hoveredCard}/>
            <Cards information={information} setHoveredCard={setHoveredCard}/>
        </div>
    )
}

export default InfoSection