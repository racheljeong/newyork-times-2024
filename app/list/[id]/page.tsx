import { Suspense } from "react";
import CategoryBooks from "../../../components/categoryBooks";
import Loading from "../../../components/loading";


    export default async function BookList({
        params : {id}
    } : {
        params : {id : string}
    }){

        return (
            <div>
                <Suspense fallback={<Loading />}>
                    <CategoryBooks id={id} />
                </Suspense>
            </div>
        );


}