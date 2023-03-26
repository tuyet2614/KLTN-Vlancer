import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import authApi from "../../../constant/http-auth-common";
import getApi from "../../../constant/http-common";
import { systemRoutes } from "../../../routes";

export const createTest = (data: any, navigate:NavigateFunction) => {
    
    authApi.post('/tests', {data})
        .then( (response) =>  {
            navigate(systemRoutes.Detail_Job_ROUTE, {
                  state: { id: response?.data?.data?.id, type: "contest" },
                })
            
        })
        .catch((error) => {
            console.log(error.response);
        });
}

export const getDetailTest = (id?: string) => {
    const [data, setData] = useState<any>()
    const [isLoading, setIsLoading] = useState(true)
    useEffect( 
        () => {      
            getApi
            .get(`/tests/${id}?populate=deep`)
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
