import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link href="" className={`${styles.category} ${styles.style}`}>
        <Image src="" alt="" width={32} height={32} className={styles.image}/>
        style
        </Link>
        
        <Link href="" className={`${styles.category} ${styles.fashion}`}>
        <Image src="" alt="" width={32} height={32} className={styles.image}/>
        fashoin
        </Link>

        <Link href="" className={`${styles.category} ${styles.food}`}>
        <Image src="" alt="" width={32} height={32} className={styles.image}/>
        food
        </Link>

        <Link href="" className={`${styles.category} ${styles.travel}`}>
        <Image src="" alt="" width={32} height={32} className={styles.image}/>
        travel
        </Link>

        <Link href="" className={`${styles.category} ${styles.coding}`}>
        <Image src="" alt="" width={32} height={32} className={styles.image}/>
        coding
        </Link>

        <Link href="" className={`${styles.category} ${styles.culture}`}>
        <Image src="" alt="" width={32} height={32} className={styles.image}/>
        culture
        </Link>
      </div>
    </div>
  )
}

export default CategoryList