import { Metadata } from "next";
import styles from "../styles/notFound.module.css";

export const metadata: Metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.title}>Not found</h1>
      <span className={styles.msg}>
        Sorry for any inconvenience. 
        It seems like you've navigated to the wrong path. 
        Please check the URL or return to the Home
      </span>
    </div>
  );
}