import { useEffect, useState } from "react";
import getApi from "../../../constant/http-auth-common";

export const getListComments = (params?: any) => {
    
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get("/recommends?populate=deep", {params: params})
        .then((response) => {
        setData(response.data.data)
        })
        .catch((error) => {
        console.log(error);
        });
            }, []
        )
    
    return data
}

