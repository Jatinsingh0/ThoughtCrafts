import React from 'react'
import styles from "./cardList.module.css"
import Card from '../card/card'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
         <Card />
         <Card />
         <Card />
      </div>
    </div>
  )
}

export default CardList