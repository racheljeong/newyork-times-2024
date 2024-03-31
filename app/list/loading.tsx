import styles from "../../styles/loading.module.css";

export default function Loading() {
    return (
      <div className={styles.loadingContainer}>
        <h2 className={styles.loadingTitle}>Loading...</h2>
      </div>
    );
  }