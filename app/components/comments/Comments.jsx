"use client"

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";


const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  if(!res.ok){
    throw new Error("something wrong with fetching comments")
  }
  return data;
}
const Comments = ({postSlug}) => {
  const {status} = useSession();
  const(isLoading, data) = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="write a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src=""
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jatin singh</span>
              <span className={styles.date}>06.09.2003</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            molestiae asperiores rem placeat accusantium voluptatem iusto error
            magnam exercitationem natus beatae nostrum, facere consequatur enim
            accusamus rerum perferendis. Numquam, natus.
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src=""
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jatin singh</span>
              <span className={styles.date}>06.09.2003</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            molestiae asperiores rem placeat accusantium voluptatem iusto error
            magnam exercitationem natus beatae nostrum, facere consequatur enim
            accusamus rerum perferendis. Numquam, natus.
          </p>
        </div>

        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src=""
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Jatin singh</span>
              <span className={styles.date}>06.09.2003</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            molestiae asperiores rem placeat accusantium voluptatem iusto error
            magnam exercitationem natus beatae nostrum, facere consequatur enim
            accusamus rerum perferendis. Numquam, natus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
