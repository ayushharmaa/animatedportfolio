import { useRef } from "react";
import "./portfolio.scss"
import {motion,useScroll ,useSpring} from "framer-motion";


const items = [
    {
        id:1,
        title:"Zerodha Clone Application",
        img:"https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"Created Clone of the Stock investing application zerodha where user can create account and invest in the real time values for the stock prices indicated with the help of API, Dashboard & Analytics functionality allows customer to manage their portfolio"
    },
    {
        id:2,
        title:" NextJs Portfolio",
        img:"https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Developed a portfolio website to have brief about my projects using trending tech stacks like NextJs ans Tailwind CSS"
    },

    {
        id:3,
        title:"Spotify Clone App",
        img:"https://images.pexels.com/photos/5077069/pexels-photo-5077069.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"🎵 This web app replicates the sleek design and functionality of Spotify's user interface, featuring responsive layouts, stylish buttons, and interactive elements. Dive into a seamless music browsing experience with this visually appealing and user-friendly clone "
    },

    {
        id:4,
        title:"NBA Players Stats Application",
        img:"https://images.pexels.com/photos/20868851/pexels-photo-20868851/free-photo-of-nba-painting-on-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc:"🏀 🔥Leveraging Python's Streamlit library, I crafted an interactive web app that seamlessly scrapes data from Basketball-reference.com"
    }
];

const Single =({items}) =>{

const ref = useRef();
const {scrollYProgress} = useScroll({target:ref});
   

 return(
        <section >
            <div className="container" ref={ref}>

            <div className="wrapper">
            
            <img src={items.img} alt="" />
            
            <motion.div className="textContainer" >
                <h2>{items.title}</h2>
                <p>{items.desc}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
            </div>
        </section>
    );

};


const Portfolio = () => {
    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref,
         offset:["end end", "start start"]
        });

        const scaleX= useSpring(scrollYProgress,{
            stiffness:100,
            damping:30,
        }); 

  return (
    <div className="portfolio" ref={ref}>
    <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{scaleX:scaleX}} className="progressBar"></motion.div>
    </div>
    
      {items.map(items=>(
        <Single items={items} key={items.id}/>
      ))}
    </div>
  )
}

export default Portfolio
