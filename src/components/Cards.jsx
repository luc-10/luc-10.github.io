import { useState } from "react"
import Card from "./Card"

function Cards({ information, setHoveredCard }){

    const maxDate = new Date()
    const visibleInfo = information.filter(info => info.startDate <= maxDate)
    const [expandedCard, setExpandedCard] = useState(null)
    
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
            {visibleInfo.map(info => (
                <Card 
                    key={info.title} 
                    info={info} 
                    expanded={expandedCard === info.title} 
                    setHoveredCard={setHoveredCard}
                    onToggle={() => (setExpandedCard(expandedCard === info.title ? null : info.title))}    
                />
            ))}
        </div>
    )
}

export default Cards