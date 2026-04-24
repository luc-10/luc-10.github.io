import { useEffect, useRef, useState } from "react"

function GridBg({children}){
    const cellSize = 50
    const containerRef = useRef(null)
    const [grid, setGrid] = useState({ cols: 0, rows: 0 })
    

    const [activeCells, setActiveCells] = useState({})

    const [hoverCell, setHoverCell] = useState(null)

    const [randomCells, setRandomCells] = useState({})

    useEffect(() => {
        const updateGrid = () => {
            if (!containerRef.current) return

            const { width, height } = containerRef.current.getBoundingClientRect()

            const cols = Math.ceil(width/cellSize)+1
            const rows = Math.ceil(height/cellSize)+1

            setGrid({ cols, rows })
        }

        updateGrid()

        window.addEventListener("resize", updateGrid)
        return () => window.removeEventListener("resize", updateGrid)
    }, [])

    const activateCell = (index) => {
        setActiveCells((prev) => ({
            ...prev,
            [index]: true
        }))

        setTimeout(() => {
            setActiveCells((prev) => {
                const copy = {...prev}
                delete copy[index]
                return copy
            })
        }, 1000)
    }

    useEffect(() => {
        if (!grid.cols || !grid.rows) return

        const interval = setInterval(() => {
            const total = grid.cols * grid.rows
            const index = Math.floor(Math.random() * total)

            setRandomCells((prev) => ({
            ...prev,
            [index]: true,
            }))

            setTimeout(() => {
            setRandomCells((prev) => {
                const copy = { ...prev }
                delete copy[index]
                return copy
            })
            }, 3500)
        }, 100)

        return () => clearInterval(interval)
    }, [grid.cols, grid.rows])

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect()

        const x = e.clientX-rect.left
        const y = e.clientY-rect.top

        const col = Math.floor(x/cellSize)
        const row = Math.floor(y/cellSize)

        const index = row*grid.cols+col 

        setHoverCell(index)

        activateCell(index)
    }

    return (
        <div 
            ref={containerRef}
            className="relative min-h-screen bg-[#1e1e1e] overflow-hidden"
            onMouseMove={handleMouseMove} 
            
            onMouseLeave={() => setHoverCell(null)}   
        >

            <div className="absolute inset-0 grid pointer-events-none"
                style={{
                    gridTemplateColumns: `repeat(${grid.cols}, ${cellSize}px)`,
                    gridTemplateRows: `repeat(${grid.rows}, ${cellSize}px)`,
                }}
            >
                {Array.from({ length: grid.cols * grid.rows }).map((_, i) => (
                    <div
                    key={i}
                    className={`
                        border border-white/5
                        transition-all duration-300
                        ${hoverCell === i 
                            ? "bg-[#ff8500]/50 shadow-[0_0_30px_rgba(255,133,0,0.5)]" 
                            : activeCells[i] 
                                ? "bg-[#ff8500]/25 shadow-[0_0_20px_rgba(255,133,0,0.25)]" 
                                : randomCells[i]
                                    ? "bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.25)]"
                                    : ""
                        }
                        `}
                    />
                ))}
            </div>

            <div className="relative z-10">
                {children}
            </div>

        </div>
    )
}

export default GridBg