//카테고리 별 리스트 뿌리기

import { Suspense } from "react";
import EachBook from "../../../components/eachBook";




export default async function BookList({
    params : {id}
} : {
    params : {id : string}
}){
    console.log(`BookList.id`,id);

    return (
        <div>
            <Suspense>
                <EachBook id={id} />
            </Suspense>
        </div>
    );


}