import { useEffect, useState } from "react";
import authApi from "../../../constant/http-auth-common";
import getApi from "../../../constant/http-common";
export const addNewPost = (data: any) => {
    authApi.post('/posts', {data})
        .then( (response) =>  {
        })
        .catch((error) => {
            console.log(error.response);
        });
}


export const getListPosts = () => {
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get("/posts")
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