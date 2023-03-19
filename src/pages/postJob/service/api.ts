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
    
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get("/posts?populate=deep", {params: params})
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

