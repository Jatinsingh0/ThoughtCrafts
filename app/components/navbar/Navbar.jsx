import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <image src="" alt="img" width={24} height={24}/>
        <image src="" alt="img" width={24} height={24}/>
        <image src="" alt="img" width={24} height={24}/>
        <image src="" alt="img" width={24} height={24}/>
      </div>

      <div className={styles.logo}>ThoughtCrafts</div>

      <div className={styles.links}>
        <Link href="/">Homepage</Link>
        <Link href="/">About</Link>
        <Link href="/components/menu">contact</Link>
        <AuthLinks />

      </div>
    </div>
  )
}

export default Navbar