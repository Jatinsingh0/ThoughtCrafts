import React from 'react';
import styles from "./footer.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={styles.container}>
    <div className={styles.info}>
      <div className={styles.logo}>
        <h1 className={styles.logoText}>ThoughtCrafts</h1>
      </div>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
        necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
        porro sequi, totam minima consequuntur, aspernatur deleniti vero
        repellendus dorales.
      </p>
      <div className={styles.icons}>
        <Image src="/facebookLogo.png" alt="" width={20} height={20} />
        <Image src="/telegramLogo.jpeg" alt="" width={20} height={20} />
        <Image src="/linkdinLogo.png" alt="" width={20} height={20} />
        <Image src="/twitterLogo.png" alt="" width={20} height={20} />
      </div>
    </div>
    <div className={styles.links}>
      <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        <Link href="/">Homepage</Link>
        <Link href="/">Blog</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        <Link href="/">Style</Link>
        <Link href="/">Fashion</Link>
        <Link href="/">Coding</Link>
        <Link href="/">Travel</Link>
      </div>
      <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        <Link href="/">Facebook</Link>
        <Link href="/">Instagram</Link>
        <Link href="/">Tiktok</Link>
        <Link href="/">Youtube</Link>
      </div>
    </div>
  </div>
  )
}

export default Footer