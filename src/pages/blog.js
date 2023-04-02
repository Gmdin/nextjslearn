import React from 'react'
import Navbar from '../../components/Navbar';


export const getStaticProps=async ()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5");
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
    {data.map((curElem)=>{
      return(
        <div key={curElem.id}>
          <h3>{curElem.id}</h3>
          <h2>{curElem.title}</h2>
          </div>
      )
    })}
    </div>
  )
}

export default blog