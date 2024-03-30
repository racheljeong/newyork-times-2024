import styles from "../styles/eachCatagory.module.css";

export default function EachCategory({target}) {
    console.log(`target`,target);
    return (
        <div className={styles.maincontainer}>
            <div className={styles.container}>
                <div className={styles.eachContainer}>
                    <span className={styles.bookTitle}>
                        <a href={target.amazon_product_url}>{target.title}</a>
                    </span>
                    <img className={styles.eachBookCover} src={target.book_image}/>
                    <span className={styles.author}>by {target.author}</span>
                    <p className={styles.description}>{target.description}</p>
                </div>  
            </div>
        </div>
    );
}