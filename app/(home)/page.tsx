// GET all best sellers lists : https://books-api.nomadcoders.workers.dev/lists

import Link from "next/link";

export const BOOKS_API_URL = `https://books-api.nomadcoders.workers.dev/lists`;

async function getBooks() {

    const response = await fetch(BOOKS_API_URL);
    const json = await response.json();
    return json;
}

export default async function Home() {

    const books = await getBooks();
    //console.log(`books`,books);
    return (
        <div>
            <h1>All Book</h1>
            <ul>
                {books.results.map((book) => (
                    <li key={book.list_name_encoded}>
                        <Link href={`/list/${book.list_name_encoded}`}>{book.display_name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}