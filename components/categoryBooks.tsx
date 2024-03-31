import EachCategory from "./eachCategory";
import styles from "../styles/catagory.module.css";

export async function getBook(id : string) {
    //const response = await fetch(`${BOOKS_API_URL}?name=${id}`);  //전체리스트가 나와버림
    const response = await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`);
    return response.json();
}


export default async function CategoryBooks({id} : {id :string}) {
    const oneCategory = await getBook(id);
    //console.log(`oneCategory`, oneCategory);
    const oneCategoryBook = oneCategory.results;
    //console.log(`eachBook`, oneCategoryBook);
    //const [oneBook, setOneBook] = useState(null);

    return (
        <div>
            <h1 className={styles.listTitle}>{oneCategoryBook.list_name}</h1>
            <div>   
                <div className={styles.listContainer}>
                    {oneCategoryBook.books.map((each)=> (
                        <EachCategory target={each} />
                    ))}
                </div>
            </div>
        </div>
    );
}