import React, {useState, useEffect} from 'react'

function Hero(){
    const text = "Hi, I'm Luca Pastore"
    const [displayedText, setDisplayedText] = useState("")
    const [index, setIndex] = useState(0)
    const bar = "|"
    const [textBar, setTextBar] = useState("")
    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev+text[index])
                setIndex(index+1)

            }, 50+Math.floor(Math.random()*100))
            return () => clearTimeout(timeout)
        }
    }, [index, text])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setTextBar((bar) => bar==="|" ? "" : "|")
        }, 750)
        return () => clearTimeout(timeout)
    }, [bar, textBar])
    return (
        <section className="text-left">
            <h1 style={{ position: "relative", display: "inline-block" }}>
            {displayedText}
            <span style={{ position: "absolute" }}>{textBar}</span>
            </h1>
        </section>
    )
}


export default Hero