import Item from "./Item"

function InfoSection({ information, title }){
    
    return (
        <div id={title} className="section mx-auto w-2/3 scroll-mt-48 min-h-[60vh] mb-48">
            <div className="flex flex-col items-start items-stretch my-24">
                <h1 className="uppercase text-4xl font-semibold">{title}</h1>
                <div className="h-[2px] opacity-50 bg-white mt-6 mb-2"></div>
                <div className="">
                    {information.map((info) => (
                        <Item info={info}/>
                    ))}
                </div>
                
                <div className="h-[2px] opacity-50 bg-white"></div>
            </div>
        </div>
    )
}

export default InfoSection