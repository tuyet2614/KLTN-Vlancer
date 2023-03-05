import { useEffect, useState } from "react";
import getApi from "../../../constant/http-common"

export const getDetailUser = (id?: string) => {
    const [data, setData] = useState()
    useEffect( 
        () => {      
        getApi
        .get(`/users/${id}?populate=*`)
        .then((response) => {
        setData(response.data)
        })
        .catch((error) => {
        console.log(error);
        });
            }, []
        )
    
    return data
}
