import Navbar from "./navbar"
import Image from "next/image"
const Layout  =({children})=>{
    return(
        <div  className="home h-screen w-screen border-2 border-solid border-black my-">
            {/* <Image
      alt="Mountains"
      src="/public/ak.png"
      quality={100}
      fill
      sizes="100vw"
      style={{
        objectFit: 'contain',
      }}
    /> */}
            <Navbar />
            {children}
        </div>
    )
}
export default Layout