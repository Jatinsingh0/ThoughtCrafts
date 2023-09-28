import React from 'react'
import styles from "./cardList.module.css"
import Card from '../card/card'
import Pagination from '../pagination/pagination'


const getData = async(page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`,
  {
    cache: "no-store",
  });

  if(!res.ok){
     throw new Error("Failed to fetch posts")
  }
  return res.json();
}
const CardList = async ({page}) => {
  const data = await getData(page);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts} >
      {data?.map(()=>{
         <Card />
     })}
     <Card />
    </div>
      <Pagination page= {page}/>
    </div>
  )
}

export default CardList