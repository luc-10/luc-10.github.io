function NavBar(){
    return (
        <div className="bg-[#262626] flex justify-center fixed top-0 left-0 w-full z-50">
            <a href="#about" className="uppercase p-4 font-bold text-2xl">About</a>
            <a href="#experience" className="uppercase p-4 font-bold text-2xl">Experience</a>
            <a href="#education" className="uppercase p-4 font-bold text-2xl">Education</a>
            <a href="#projects" className="uppercase p-4 font-bold text-2xl">Projects</a>
            <a className="uppercase p-4 font-bold text-2xl">Contact</a>

        </div>
    )
}

export default NavBar