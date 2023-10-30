import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
import AuthLinks from '../authLinks/AuthLinks'
import Image from 'next/image'


const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebookLogo.png" alt="img" width={26} height={26}/>
        <Image src="/telegramLogo.jpeg" alt="img" width={26} height={26}/>
        <Image src="/linkdinLogo.png" alt="img" width={26} height={26}/>
        <Image src="/twitterLogo.png" alt="img" width={26} height={26}/>
      </div>

      <div className={styles.logo}>ThoughtCrafts</div>

      <div className={styles.links}>
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>About</Link>
        <Link href="/" className={styles.link}>contact</Link>
        <AuthLinks />

      </div>
    </div>
  )
}

export default Navbar