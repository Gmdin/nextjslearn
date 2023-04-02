import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar';

const errror = () => {
  const router=useRouter();
  useEffect(()=>{
    setTimeout(()=>{
        router.push('/');
    },5000)
      
  },[])
  return (
    <div> 
      <Navbar/>
      errror

        <button><Link href='/'>Home</Link></button>
    </div>
  )
}

export default errror