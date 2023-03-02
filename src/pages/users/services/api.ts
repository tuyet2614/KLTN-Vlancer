import { useEffect, useState } from "react";
import userApi from "../../../constant/http-auth-common"

export const getDetailUser = (id?: string) => {
    const [data, setData] = useState()
    useEffect( 
        () => {      
        userApi
        .get(`/users/${id}`)
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