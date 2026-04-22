import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion";
import Item from "./Item";

function VerticalBar({ selectedItem, setSelectedItem, colors}){

    const ref = useRef(null)
    useEffect(() => {

    
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                console.log("Outside");
                setSelectedItem(null)
            } else {
                console.log("Inside")
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
            return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            };
        }, []);

    return (

        <div className="items-center flex justify-center h-screen">
            <motion.div ref={ref} className="uppercase font-bold text-center gap-2 items-center text-3xl flex flex-col"
            animate={{ x: selectedItem !== null ? -window.innerWidth/4 : 0 }}
            transition={{ duration: 0.75, ease: [0.75, 0, 0.25, 1] }}
            >

            <Item onClick={() => setSelectedItem("about")} colors={colors}>About me</Item>
            <Item onClick={() => setSelectedItem("experience")} colors={colors}>Experience</Item>
            <Item onClick={() => setSelectedItem("education")} colors={colors}>Education</Item>
            <Item onClick={() => setSelectedItem("projects")} colors={colors}>Projects</Item>
            <Item onClick={() => setSelectedItem("contact")} colors={colors}>Contact</Item>
            </motion.div>
        </div>
    )
}

export default VerticalBar


//default: ff6d00
//hover: ff9e00