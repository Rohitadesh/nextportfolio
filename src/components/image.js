import Image from "next/image"
const Images=()=>{
    return (
        <Image src="/public/back.jpg" alt="myback"  fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}  />
    )
}
export default Images;