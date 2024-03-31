import Link from "next/link";
import styles from "../../styles/home.module.css";

const BOOKS_API_URL = `https://books-api.nomadcoders.workers.dev/lists`;

async function getBooks() {

    const response = await fetch(BOOKS_API_URL);
    const json = await response.json();
    return json;
}

export default async function Home() {

    const books = await getBooks();
    //console.log(`books`,books);
    //abc순으로 정렬
    books.results.sort((a,b) => a.display_name.localeCompare(b.display_name));

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                {books.results.map((book) => (
                    <div className={styles.eachItem} key={book.list_name_encoded}>
                        <Link className={styles.eachItemLink} href={`/list/${book.list_name_encoded}`}>
                        <svg className={styles.eachItemIcon} 
                             xmlns="http://www.w3.org/2000/svg" 
                             fill="none" viewBox="0 0 24 24" 
                             strokeWidth="1.5" 
                             stroke="currentColor" 
                             width="25" height="25">
                            <path strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                            {book.display_name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}