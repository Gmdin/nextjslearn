import React from 'react'
import Link from "next/link";
const Navbar = () => {
  return (
    <>
    <nav>
        <ul className='htc'>
          <Link href="/home">
            Home
          </Link>
          <Link href="/service">
            service
          </Link>
          <Link  href="/contact">
            Contact
          </Link>
          <Link href="/blog">
            Blog
          </Link>
        </ul>
      </nav>
    </>
  )
}

export default Navbar