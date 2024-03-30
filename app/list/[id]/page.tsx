import { Suspense } from "react";
import CategoryBooks from "../../../components/categoryBooks";


    export default async function BookList({
        params : {id}
    } : {
        params : {id : string}
    }){
        console.log(`BookList.id`,id);

        return (
            <div>
                <Suspense>
                    <CategoryBooks id={id} />
                </Suspense>
            </div>
        );


}