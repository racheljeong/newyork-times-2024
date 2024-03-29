// GET the books inside of a list named: 'hardcover-fiction(하드커버 픽션)': https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction

import { BOOKS_API_URL } from "../app/(home)/page";

export async function getBook(id : string) {
    //const response = await fetch(`${BOOKS_API_URL}?name=${id}`);  //전체리스트가 나와버림

    const response = await fetch(`https://books-api.nomadcoders.workers.dev/list?name=${id}`);
    return response.json();
}


export default async function EachBook({id} : {id :string}) {
    const oneCategory = await getBook(id);
    console.log(`oneCategory`, oneCategory);
    const oneCategoryBook = oneCategory.results;
    console.log(`eachBook`, oneCategoryBook);
    return (
        <div>
            <h1>{oneCategoryBook.list_name}</h1>
            <ul>
                {oneCategoryBook.books.map((each,index)=> (
                    <li key={index}>{each.title}</li>
                ))}
            </ul>
        </div>
    );
}