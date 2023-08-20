import Navbar from "./navbar"
import Image from "next/image"
const Layout  =({children})=>{
    return(
        <div  className="home h-screen w-screen ">
            <Navbar />
            {children}
        </div>
    )
}
export default Layout