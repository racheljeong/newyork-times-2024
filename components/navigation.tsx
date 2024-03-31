"use client";

import Link from "next/link";
import {useRouter } from "next/navigation";
import styles from "../styles/navigation.module.css";


export default function Navigation() {

  const router = useRouter();
  const goBack = () => {
    router.back();
  }

  return (
    <nav className={styles.mainNav}>
      <h1 className={styles.mainTitle}>NEW YORK TIMES</h1>
      <div className={styles.navContainer}>
        <span className={styles.navList} onClick={goBack}>
          &#8592;Back
        </span>
        <span className={styles.navList}>
          <Link href="/">Home</Link>
        </span>
        <span className={styles.navList}>
          <Link href="/about">About</Link>
        </span>
       </div> 
    </nav>
  );
}