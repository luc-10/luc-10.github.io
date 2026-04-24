import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function About(){

    return (
        <div id="about" className="section w-1/2 mx-auto scroll-mt-48 h-screen flex items-center">
            <div className="flex flex-col items-start">
                <h1 className="text-8xl uppercase font-bold">Luca Pastore</h1>
                <p className="my-8 text-xl">
                    I like computers, my cat, bad movies, rubik's cubes, video games (sometimes) and my cat. In my free time I like to stare at the wall and contemplate why abbreviated is such a long word. 
                </p>
                <div className="h-[2px] bg-white w-full"></div>
                <div className="mt-8 flex justify-between w-full">
                    <p className="text-2xl">isdalyt@gmail.com</p>
                    <div className="flex">
                        <a href="" target="_black" className="text-4xl mx-4 hover:text-[#ff9e00] transition-all duration-300"><FaGithub/></a>
                        <a href="" target="_black" className="text-4xl mx-4 hover:text-[#ff9e00] transition-all duration-300"><FaLinkedin/></a>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About