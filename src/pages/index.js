
import Navbar from "../../components/Navbar";
import Image from "next/image";
const index = () => {
  return (
    <>
      <Navbar/>
      <Image className="htc" src="/d3.jpg" width="400" height="300"></Image>
    </>
  )
}

export default index;