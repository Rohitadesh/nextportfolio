import game from "../images/game.png"
import joke from "../images/joke.png"
import client from "../images/bio.png"
import weather from "../images/weather.png"
import {motion} from "framer-motion"
// import AOS from 'aos'
// import { useEffect } from "react"
import Image from "next/image"
const Work =() =>{
    
    // const scroll=useScroll()
    return (
        <main className=' h-[93%] w-full overflow-y-auto'>
            <div className="h-[60%] w-full  flex flex-row  gap-8 ">
                <motion.div className="h-full w-[46%]  rounded-xl shadow-2xl shadow-gray-400 ml-6"
                whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>

                    <Image src={game} width={600}  alt="game"  className="h-full w-full rounded-xl object-fit"  priority={true} />
                </motion.div>
                
                <motion.div className="h-full w-[42%] border border-black shadow-gray-400 rounded-xl shadow-2xl ml-4"
                whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    <h3 className="text-2xl text-center   font-semibold">Game</h3>
                <h3 className="text-md text-gray-500 text-left p-10 font-medium">
                    This Is Rockpapercutter website used to obtain large amounts of 
                    data from websites.the game is between user and computer.     
                    This Project is Done By using HTML, css and JavaScript</h3>

                </motion.div>
            </div>
            <div className="h-[60%] w-full flex flex-row gap-8 mb-2">
                <motion.div className="h-full w-[46%]  rounded-xl shadow-2xl shadow-gray-400 ml-6 mt-6"
                whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    <Image src={joke} width={600} height={110} alt="game" className="h-full w-full rounded-xl"  priority={true} />
                </motion.div>
                
                <motion.div className="h-full w-[42%]  rounded-xl shadow-2xl shadow-gray-400 border border-black border-2 ml-4 mt-6  "
                whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                        <h3 className="text-2xl text-center   font-semibold">JokeAPI</h3>
                    <h3 className="text-md text-gray-500 text-left p-10 font-medium">
                        This Is Joke website generating random joke    
                        This Project is Done By using HTML, css and JavaScript
                    </h3>
                </motion.div>  
            </div>

            <div className="h-[60%] w-full flex flex-row gap-8 mb-2">
                <motion.div className="h-full w-[46%]  rounded-xl shadow-2xl ml-6 mt-14 shadow-gray-400"
                whileHover={{ scale: 1.1 }} transition={{ stiffness: 300, damping: 10 }}>
                    <Image src={weather} width={600} height={110} alt="game" className="h-full w-full rounded-xl"  priority={true} />
                </motion.div>
                
                <motion.div className="h-full w-[42%] rounded-xl shadow-2xl mt-14 ml-4 shadow-gray-400 border border-black"
                whileHover={{ scale: 1.1}} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    <h3 className="text-2xl text-center font-semibold">ReactWeather</h3>
                    <h3 className="text-md text-gray-500 text-left p-10 font-medium">
                    This Is ReactWeather website generating weather infromation currentcity and temperature    
                        This Project is Done By using React and OpenweatherApi
                    </h3>

                </motion.div>  
            </div>

            <div className="h-[60%] w-full flex flex-row gap-8 mb-2">
                <motion.div className="h-full w-[46%]  rounded-xl shadow-2xl ml-6 mt-28 shadow-gray-400"
                whileHover={{ scale: 1.1 }} transition={{ type: "spring" ,stiffness:300,daming:10}}>
                    <Image src={client} width={600} height={110} alt="game" className="h-full w-full rounded-xl" priority={true} />
                </motion.div>
                
                <motion.div className="h-full w-[42%] shadow-gray-400 rounded-xl overflow-scroll ml-4  border border-black  shadow-2xl mt-28 "
                whileHover={{ scale: 1.1}} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
                    <h3 className="text-2xl text-center   font-semibold">My Bio Backup</h3>
                    <h3 className="text-md text-gray-500 text-left p-10 font-medium">
                    This is our client product .This is Application Available in Play Store Also.
                    This Product Provides A Secured Account In Cloud To Everyone To Access Medical 
                    Documents Such As MRI ReportCT Scan, X Ray, Lab Reports, Other Medical Tests, 
                    3D Imaging, Medical Prescriptions In Digital Format From The Original Issuers 
                    Of These Certificates The Project Will Be Hosted On Aws 
                    I Have Also Little Bit Knowledge About This In This Project I Have Been Be Worked On Backend Using Node Js And
                    Express Js And Mysql The Admin Side Of This Product Has Been Done By Be ..This Project Using Nunjucks Template, Tailwind Css , Html Javascript
                    </h3>

                </motion.div>  
            </div>
          

        </main>)
}
export default Work;