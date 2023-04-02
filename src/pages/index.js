
import Navbar from "../../components/Navbar";
import Image from "next/image";
import Head from "next/head";
const index = () => {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
      <Navbar/>
      <Image className="htc" src="/d3.jpg" width="400" height="300"></Image>
    </>
  )
}

export default index;