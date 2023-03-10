import { useEffect, useState } from "react";
import getApi from "../../../constant/http-common"
import authApi from "../../../constant/http-auth-common"

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

export const updateUser = async(id: any, data:any) => {
    await authApi.put(`/users/${id}`, data)
        .then( (response) =>  {
            
        })
        .catch((error) => {
            console.log(error.response);
        });
}
