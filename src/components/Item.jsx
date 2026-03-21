import { useState } from "react";
import { motion } from "framer-motion";

function Item({ children, onClick }) {
    const [rotation, setRotation] = useState(0)
    const randomRotation = () => {
        const value = Math.floor(Math.random() * 5) + 1
        return Math.random() > 0.5 ? value : -value
    }
    return (
        <motion.p className="hover:text-[#ff9e00] hover:rotate-2 duration-100 cursor-pointer"
        animate={{ rotate:rotation }}
        transition={{ duration: 0.1 }}
        onHoverStart={() => setRotation(randomRotation())}
        onHoverEnd={() => setRotation(0)}
        onClick = {onClick}
        >
            {children}
        </motion.p>
    )

}

export default Item