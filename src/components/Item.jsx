import { useState } from "react";
import { motion } from "framer-motion";

function Item({ children, onClick, colors}) {
    const [rotation, setRotation] = useState(0)
    const randomRotation = () => {
        const value = Math.floor(Math.random() * 5) + 1
        return Math.random() > 0.5 ? value : -value
    }

    const [color, setColor] = useState("")
    const randomColor = () => {
        return colors[Math.floor(Math.random()*colors.length)]
    }

    return (
        <motion.p className="duration-100 cursor-pointer"
        style={{ color: color }}
        animate={{ rotate:rotation }}
        transition={{ duration: 0.1 }}
        onHoverStart={() => {
            setRotation(randomRotation())
            setColor(randomColor())
        }}
        onHoverEnd={() => {
            setRotation(0)
            setColor("")
        }}
        onClick = {onClick}
        >
            {children}
        </motion.p>
    )

}

export default Item