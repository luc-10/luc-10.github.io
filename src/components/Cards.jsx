import { useState } from "react"
import Card from "./Card"

function Cards({ information, setHoveredCard, colors }){

    const maxDate = new Date()
    const visibleInfo = information.filter(info => info.startDate <= maxDate)
    const [expandedCard, setExpandedCard] = useState(null)
    
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 overflow-y-auto max-h-[80vh]">
            {visibleInfo.map((info, i) => (
                <Card 
                    key={info.title} 
                    info={info} 
                    expanded={expandedCard === info.title} 
                    setHoveredCard={setHoveredCard}
                    onToggle={() => (setExpandedCard(expandedCard === info.title ? null : info.title))}  
                    color={colors[i]}  
                />
            ))}
        </div>
    )
}

export default Cards
