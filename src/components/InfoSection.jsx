import Item from "./Item"

function InfoSection({ information, title }){
    
    return (
        <div id={title} className="section mx-auto w-full md:w-2/3 scroll-mt-48 min-h-[60vh] mb-16 md:mb-48 px-4 md:px-0">
            <div className="flex flex-col items-stretch my-12 md:my-24">
                <h1 className="uppercase text-2xl md:text-4xl font-semibold text-[#ff8500]">{title}</h1>
                <div className="h-[2px] opacity-50 bg-[#ff6d00] mt-6 mb-2"></div>
                <div>
                    {information.map((info, i) => (
                        <Item key={i} info={info}/>
                    ))}
                </div>
                
                <div className="mt-2 h-[2px] opacity-50 bg-[#ff6d00]"></div>
            </div>
        </div>
    )
}

export default InfoSection