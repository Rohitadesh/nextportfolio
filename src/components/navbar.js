import Link from "next/link";
const Navbar =()=>{
    return(
        <div className="h-[7%] w-full   ">
            <ul className="flex flex-wrap flex-row justify-center items-center gap-16">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/work">Works</Link></li>
                <li><Link href="/contact">contact</Link></li>
                
            </ul>
        </div>
    )
}
export default Navbar;