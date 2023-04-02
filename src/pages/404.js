import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';
import Head from 'next/head';

const errror = () => {
  const router=useRouter();
  useEffect(()=>{
    setTimeout(()=>{
        router.push('/');
    },5000)
      
  },[])
  return (
    <div> 
      <Head>
        <title>Error Page</title>
      </Head>
      <Navbar/>
      errror

        <button><Link href='/'>Home</Link></button>
    </div>
  )
}

export default errror