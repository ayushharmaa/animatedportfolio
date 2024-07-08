import { motion,animate } from "framer-motion"
import "./hero.scss"



const textVariants = {
    initial:{
        x:-500,opacity:0,
    },animate:{
        x:0,opacity:1,
        transition:{
            duration:1,straggerChildren: 0.1,
        },

    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration: 2,repeat: Infinity
        }
    }
};

const sliderVariants = {
    initial:{
        x:0,
    },animate:{
        x:"-220%",
        transition:{
           repeat: Infinity ,duration:20,
           repeatType:"mirror",
        },

    },
  
};



const Hero = () => {
  return (
    <div className="hero">
    <div className="wrapper">
  <motion.div className="textContainer" variants={textVariants} intial="initial" animate="animate">
    <motion.h2 variants={textVariants}>AYUSH SHARMA</motion.h2>
    <motion.h1 variants={textVariants}>Web Developer & ML Enthusiast 🧑‍💻</motion.h1>
    <motion.div variants={textVariants} className="buttons">
    <motion.button variants={textVariants}>See My Projects</motion.button>
    <motion.button variants={textVariants}>Contact Me</motion.button>  
    </motion.div>
    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
  </motion.div>
  </div>
  <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
  Editor Developer Creator

  </motion.div>


    <div className="imageContainer">

        <img src="/Hero2.png" alt=" " />
    </div>

    </div>
  )
}

export default Hero
