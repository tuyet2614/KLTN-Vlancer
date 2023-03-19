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

export const createProfile = async(userId:any, data:any) => {
    await authApi.post('profiles', {data})
        .then( (response) =>  {
            console.log("res: ", response?.data?.data.id);
            
            const data = {
                profile: response.data.data.id
            }

            console.log("data profile: ", data);
            
            updateUser(userId, data)
        })
        .catch((error) => {
            console.log(error.response);
        });
}
