import CardList from "../components/cardList/cardList"
import styles from "./blogPage.module.css"
import Menu from "../components/menu/page"

const blogPage = ({searchParams}) => {
  const page = parseInt(searchParams.page) || 1;
  const {cat} = searchParams;
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>{cat} Blog</h1>
        <div className={styles.content}>
            <CardList cat={cat} page={page}/>
            <Menu />
        </div>
    </div>
  )
}

export default blogPage