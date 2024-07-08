import "./services.scss"
import { animate, motion } from "framer-motion"


const variants={
  initial:{
    x:-500,
    y:100,
    opacity:0
  },
  animate:{
 x:0,
 opacity:1,
 y:0,
 transition:{
  duration:1,
  staggerChildren: 0.1,

 }

  }
}

const Services = () => {



  return (
    <motion.div className="services" variants={variants} initial="initial" whileInView="animate"
    
    >
    <motion.div className="textContainer" variants={variants} initial="initial" animate="animate">
        <p>I focus on building presentable websites <br/> with user-interactive content </p>
        <hr></hr>
    </motion.div>
    <motion.div className="titleContainer" variants={variants} initial="initial" animate="animate">
    <div className="title">
        <img src="/people.webp " alt=" " />
        <h1><motion.b whileHover={{color:"orange"}}>What</motion.b> tech stack </h1>
    </div>
    <div className="title">
        
        <h1><motion.b whileHover={{color:"orange"}}>Do I </motion.b>use</h1>
        <button>WHAT I'VE DONE?</button>
    </div>

    </motion.div>
    <motion.div className="listContainer" variants={variants} initial="initial" animate="animate">
    <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}><h2>Languages</h2>
    <p>JAVA, HTML/CSS, JavaScript, ReactJS , PowerShell</p>
    <button>GO</button>
    </motion.div>

    <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}><h2>Tools</h2>
    <p>AWS, MongoDB Atlas, IntelliJ, Robo3T, MySQL Workbench, Postman, MS Office</p>
    <button>GO</button>
    </motion.div>

    <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}><h2>Frameworks</h2>
    <p>Bootstrap, AngularJS, Django, ExpressJS,NextJS</p>
    <button>GO</button>
    </motion.div>

    <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}><h2>Additional Skills</h2>
    <p>Python,Kafka, Power BI, Tableau</p>
    <button>GO</button>
    </motion.div>


    </motion.div>
      
    </motion.div>
  )
}

export default Services
