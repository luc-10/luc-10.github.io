import TimeLine from "./TimeLine"
import Cards from "./Cards"
import { useState } from "react"
import { motion } from "framer-motion"

function InfoSection({ information, colors }){

    const [hoveredCard, setHoveredCard] = useState(null)

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x:60 }}
                animate={{ opacity: 1, x:0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut"}}
                exit={{ opacity: 0.5, ease: "easeOut", x:60 }}
            >
                <TimeLine information={information} hoveredCard={hoveredCard} colors={colors}/>
            </motion.div>
            <Cards information={information} setHoveredCard={setHoveredCard} colors={colors}/>
        </div>
    )
}

export default InfoSection 