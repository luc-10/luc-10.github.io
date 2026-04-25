import { FaGithubSquare, FaLinkedin } from "react-icons/fa"
import LibgdxOriginal from 'devicons-react/icons/LibgdxOriginal';

function About(){

    return (
        <div id="about" className="w-full md:w-1/2 px-4 md:px-0 section mx-auto scroll-mt-48 h-screen flex items-center">
            <div className="flex flex-col items-start">
                <h1 className="text-4xl md:text-8xl uppercase font-bold text-[#ff9e00]">Luca Pastore</h1>
                <p className="my-8 text-xl">
                    I’m an Italian Computer Science graduate. I studied in Norway through the Erasmus+ program and I’m currently volunteering in Romania.
                    I like my cat, programming, bad movies, Rubik’s cubes, video games and my cat.

                </p>
                <div className="h-[2px] bg-[#ff6d00] w-full opacity-50"></div>
                <div className="mt-8 flex flex-col md:flex-row md:justify-between w-full gap-4">
                    <a 
                        href="mailto:isdalyt@gmail.com" 
                        className="text-lg md:text-2xl break-all hover:text-[#ff9e00] transition-all duration-300"
                    >isdalyt@gmail.com</a>
                    <div className="flex">
                        <a 
                            href="/CV.pdf" download 
                            className="hover:bg-[#ff9e00] bg-[#d4d4d4] text-[#1e1e1e] text-xl font-semibold inline-flex text-center items-center justify-center rounded-full mx-2 px-4 transition-all duration-300"
                        >DOWNLOAD CV</a>
                        <a 
                            href="https://github.com/luc-10" target="_black" 
                            className="text-4xl hover:text-[#ff9e00] transition-all duration-300"
                        ><FaGithubSquare/></a>
                        {/*<a 
                            href="" target="_black" 
                            className="text-4xl mx-2 hover:text-[#ff9e00] transition-all duration-300"
                        ><FaLinkedin/></a>*/}
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About