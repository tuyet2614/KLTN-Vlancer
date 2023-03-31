import { useEffect, useState } from "react";
import getApi from "../../../constant/http-auth-common";

export const getListComments = (params?: any) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get("/recommends?populate=*", {params: params})
        .then((response) => {
        setData(response.data.data)
        setIsLoading(false)
        })
        .catch((error) => {
        console.log(error);
        setIsLoading(false)
        });
            }, []
        )
    
    return {data, isLoading}
}

