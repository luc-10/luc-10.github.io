import { useState, useEffect, useRef } from "react"

function NavBar() {
    const [activeSection, setActiveSection] = useState("about")
    const [lineStyle, setLineStyle] = useState({ left: 0, width: 0 })
    const navRef = useRef(null)

    const isClickScrolling = useRef(false)

    const links = [
        { href: "about", label: "About" },
        { href: "experience", label: "Experience" },
        { href: "education", label: "Education" },
        { href: "projects", label: "Projects" },
    ]

    useEffect(() => {
        const sections = document.querySelectorAll(".section")
        const observer = new IntersectionObserver(
        (entries) => {
            if (isClickScrolling.current) return 
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id)
            }
            })
        },
        { threshold: 0, rootMargin: "-40% 0px -60% 0px" }
        )
        sections.forEach((s) => observer.observe(s))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!navRef.current) return
        const activeLink = navRef.current.querySelector(`[data-href="${activeSection}"]`)
        if (activeLink) {
        setLineStyle({
            left: activeLink.offsetLeft,
            width: activeLink.offsetWidth,
        })
        }
    }, [activeSection])


    useEffect(() => {
        const handleScrollEnd = () => {
            clearTimeout(window.__scrollTimer)

            window.__scrollTimer = setTimeout(() => {
            isClickScrolling.current = false
            }, 120)
        }

        window.addEventListener("scroll", handleScrollEnd)

        return () => window.removeEventListener("scroll", handleScrollEnd)
    }, [])

    return (
    <div className="bg-[#2e2e2e] flex justify-center fixed top-0 left-0 w-full z-50 shadow-md">
        <div ref={navRef} className="flex relative">
            {links.map(({ href, label }) => (
            <a
                key={href}
                href={`#${href}`}
                data-href={href}

                onClick={() => {
                    isClickScrolling.current=true
                    setActiveSection(href)
                }}
                className={`uppercase p-4 font-bold text-2xl duration-150
                ${activeSection === href 
                    ? "text-[#ff8500] hover:text-[#ff9e00]" 
                    : "text-[#ff6d00] hover:text-[#ff9e00]"
                }
                `}
            >
                {label}
            </a>
            ))}
            <div
                className="absolute bottom-0 h-[3px] bg-[#ff8500] transition-all duration-300"
                style={{ left: lineStyle.left, width: lineStyle.width }}
            />
        </div>
    </div>
    )
}

export default NavBar