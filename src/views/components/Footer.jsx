import { useState } from "react"

const Footer = () => {

    const [isOver, setIsOver] = useState(false)

    return (
        <footer>
        <span className="left gray">Built by 47 Labs</span>
        <span onMouseOver={() => {
                    setIsOver(true)
                }} onMouseLeave={() => {
                    setIsOver(false)
                }}>Terms and Conditions
                {
                    isOver?" >":""
                }
                </span>
        <span className="right gray">All Rights Reserved – 2022</span>
        </footer>
    )
}

export default Footer;