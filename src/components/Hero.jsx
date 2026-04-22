import pic from "../assets/pic.png"


function Hero({ colors }){

    return (
        <div className="flex justify-center items-center w-full h-full p-[16px]">
            <div className="w-1/4 ">
                <h1 className="uppercase text-5xl font-bold"
                    style = {{ color: colors[0] }}
                >Luca Pastore</h1>
                <p className="pt-4 text-xl font-semibold">
                    I studied in Italy, spent a semester in Norway, and I'm now volunteering in Romania. Along the way I picked up a degree in Computer Science and an interest in graph theory.
                </p>
            </div>
            <img src={pic} className="w-1/6 absolute right-[15%]"></img>
        </div>
    )
}


export default Hero