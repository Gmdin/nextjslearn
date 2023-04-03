import React from 'react'
import Navbar from '../../components/Navbar';
import Link from 'next/link';


export const getStaticProps=async ()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts");
  const data=await res.json();
  return {
    props:{
      data
    }
  }
}
const blog = ({data}) => {
  return (
    <div><Navbar/>
    <br></br>
    {data.slice(0,5).map((curElem)=>{
      return(
        <div key={curElem.id}>
          <h3>{curElem.id}</h3>
       <Link href={`/service/${curElem.id}`}>   <h2>{curElem.title}</h2></Link>
          </div>
      )
    })}
    </div>
  )
}

export default blog