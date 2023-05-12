import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Header = () => {
  return (

    <div>
      <header>
          
        <div className='logo_container'>
            <Image src={'/images/my_logo.jpg'} className='logo' width={75} height={75} alt='logo'/>
        </div>

        <h1 className='title'>Memory Showcase</h1>

        
          <nav className='menu-items'>
            <Link href='/'>Home</Link>
            <Link href='/memories'>Memories</Link>
            <Link href='/about'>About</Link>
          </nav>
        
        
      </header>

    </div>
        
  )
}
