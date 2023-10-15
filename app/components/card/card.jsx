import React from 'react'
import styles from "./card.module.css"
import Image from 'next/image'
import Link from 'next/link'

const Card = ({item, key}) => {
  return (
    <div className={styles.container} key={key}>
        {item.image &&
           <div className={styles.imageContainer}>
             <Image src={item.image} alt="" fill className={styles.image}/>
           </div>
        }
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>{item.createdAt.substring(0,10)} - {" "}</span>
                <span className={styles.category}>{item.catSlug}</span>
            </div>
            <Link href={`/posts/${item.slug}`}><h1 className={styles.title}>{item.title}</h1></Link>
            <p className={styles.desc}>{item.desc}</p>
            <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link>
        </div>

    </div>
  )
}

export default Card