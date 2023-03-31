import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Notification from "../../../components/base/components/Notification";
import authApi from "../../../constant/http-auth-common";
import getApi from "../../../constant/http-common";
import { systemRoutes } from "../../../routes";

export const addNewPost = async(data: any, routeListJob:() => void) => {
    
   await authApi.post('/posts', {data})
        .then( (response) =>  {
            
            routeListJob()
        })
        .catch((error) => {
            console.log(error.response);
        });
}


export const getListPosts = (params?: any) => {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState<any>([])
    useEffect( 
        () => {      
        getApi
        .get("/posts?populate=*", {params: params})
        .then((response) => {
        setData(response.data)
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

