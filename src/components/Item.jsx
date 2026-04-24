function Item({ info }){
    return(
        <div className="p-8">
            <div className="flex justify-between">
                <h1 className="font-bold text-xl">{info.title}</h1>

                <span className="text-base">{info.startDate.toLocaleDateString()} • {info.endDate.toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
                <a href={info.link} target="_black" className="text-xl">{info.organization}</a>
                <span className="text-base">{info.location}</span>
            </div>
            <div className="m-4">
                {info.details.map((detail) => (
                    <p className="text-lg">• {detail}</p>
                ))}
            </div>
        </div>
    )
}

export default Item