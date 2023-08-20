import { FaRegEnvelope } from "@react-icons/all-files/fa/FaRegEnvelope";
import{FaMapMarkerAlt} from "@react-icons/all-files/fa/FaMapMarkerAlt";
import {FaMobileAlt} from "@react-icons/all-files/fa/FaMobileAlt";
// import '@/images/contact.jpg'

const Contact= () =>{
    
    return(
       <div className=" h-[92.8%] flex sm:[92.8%]  flex-col gap-2 flex-wrap justify-center items-center md:h-[92.8%] ">
            {/* <div className="border border-solid border-black  h-[5%]"></div> */}
            <div className="shadow-xl h-[60%] w-[35%] sm:w-[35%] md:w-[35%]  rounded-xl shadow-gray-500 border-pink-500  flex flex-wrap flex-col justify-center gap-12 items-center ">
               
                <div className="h-[10%] w-[50%] sm:w-[50%] md:w-[55%] gap-1 flex flex-col flex-wrap justify-center items-center content-start -mt-6 rounded-md border border-solid border-black  ">
                    <span > <FaMobileAlt className="ml-1 sm:text-xs" /></span><p className="md:text-xs sm:text-xs">+91-7259926393</p>
                </div>
                <div className=" h-[10%] w-[58%] sm:w-[60%]  md:w-[60%] md:h-[12%] gap-1 md rounded-md  border border-solid border-black flex flex-col content-start flex-wrap justify-center items-center ">
               
                    <span > <FaRegEnvelope className="ml-1 text-sm sm:text-xs" /></span><p className="text-md sm:text-xs md:text-xs">adeshnagalikar2000@gmail.com</p>
                </div>
               
                <div className="  h-[10%] w-[50%] sm:w-[50%] md:w-[55%] gap-1  rounded-md border border-solid border-black flex flex-col flex-wrap justify-center content-start items-center ">
                    <span>
                        <FaMapMarkerAlt  className="ml-1 md" />
                    </span><p className="text-sm sm:text-sm md:text-sm">Hubbali, Karnataka</p>
                </div>
            
            </div>
            
            <div className=" shadow-xl shadow-gray-500 md border border-black opacity-50 flex flex-col flex-wrap justify-center items-center rounded-xl w-[12%] h-[10%]">
            
                <h1 className="text-sm ">Contact</h1>
            
            </div>
            
           
       
       </div>
    )
}
export default Contact;