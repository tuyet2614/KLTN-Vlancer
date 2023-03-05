import { useEffect, useState } from "react";
import getApi from "../../constant/http-common";
export const getCategories = () => {
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get("/categories?filters[name][$contains]=a")
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

export const getService = (text?: any) => {
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get(`/services?filters[name][$contains]=${text}`, )
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

export const getCities = () => {
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get("/services")
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

export const getSkills = () => {
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get("/skills")
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