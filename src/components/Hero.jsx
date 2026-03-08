function Hero(){
    return (
        <section className="items-center min-h-screen flex flex-col justify-center px-6 md:px-16">
            <p className="text-gray-500 text-sm tracking-widest uppercase mb-3">Computer Science Graduate</p>
            <h1 className="text-5xl font-times-new-roman mb-6 relative uppercase">Luca Pastore</h1>
            <p className="text-lg text-gray max-w-2xl leading-relaxed mb-4 ">I've always been drawn to problems that don't have an obvious solution. That instinct pushed me toward Computer Science, where I discovered a passion for algorithms and the elegance of well-structured code. Along the way I studied abroad in Norway and I'm currently volunteering in Romania.</p>
            <p className="italic text-gray-500 max-w-2xl mb-8">Write something cool here, preferably about this length</p>
            <a href="#projects" className="text-sm tracking-widest uppercase transition-colors w-fit">View my work ↓</a>
        </section>
    )
}


export default Hero