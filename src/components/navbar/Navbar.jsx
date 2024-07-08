import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"


const Navbar = () => {
  return (
    <div className="navbar">
        {/* Sidebar */ }
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration: 0.5}}
            >PORTFOLIO</motion.span>
            <div className="social">
                <a href="https://www.instagram.com/"><img src="/instagram.png" alt=" " /></a>
                <a href="https://www.linkedin.com/in/ayush-sharma-b39b91220/"><img src="/linkedIn.png" alt=" " /></a>
                <a href="https://github.com/ayushharmaa"><img src="/github.png" alt=" " /></a>
                <a href="https://x.com/ayushsharma7425"><img src="/twitter.png" alt=" " /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar