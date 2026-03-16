function NavBar(){
    return (
        <div>
            <section className="items-center flex justify-end bg-[#3c096c] bg-opacity-50">
                <div className="h-16 flex items-center w-5/12">
                    <a href="#experience" className="p-6 text-[#ff6d00] text-xl hover:text-[#ff9e00] duration-300 uppercase font-semibold">Experience</a>
                    <a href="#education" className="p-6 text-[#ff6d00] text-xl hover:text-[#ff9e00] duration-300 uppercase font-semibold">Education</a>
                    <a href="#projects" className="p-6 text-[#ff6d00] text-xl hover:text-[#ff9e00] duration-300 uppercase font-semibold">Projects</a>
                </div>
            </section>
        </div>
    )
}

export default NavBar

//default: ff6d00
//hover: ff9e00