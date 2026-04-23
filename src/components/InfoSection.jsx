import Item from "./Item"

function InfoSection({ information, title }){
    
    return (
        <div id={title} className="mx-auto w-1/2 scroll-mt-48">
            <div className="flex flex-col items-start my-48 items-stretch">
                <h1 className="uppercase text-4xl font-semibold">{title}</h1>
                <div className="">
                    {information.map((info) => (
                        <Item info={info}/>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default InfoSection