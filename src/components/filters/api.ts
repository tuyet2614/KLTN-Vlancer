import { useEffect, useState } from "react";
import getApi from "../../constant/http-common";
export const getCategories = (text?: any) => {
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get(`/categories?filters[name][$contains]=${text}`)
        .then((response) => {
        setData(response.data.data)
        })
        .catch((error) => {
        console.log(error);
        });
            }, [text]
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
            }, [text]
        )
    
    return data
}

export const getCities = (text?: any) => {
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get(`/addresses?filters[city][$contains]=${text}`)
        .then((response) => {
        setData(response.data.data)
        })
        .catch((error) => {
        console.log(error);
        });
            }, [text]
        )
    
    return data
}

export const getSkills = (text?: any) => {
    const [data, setData] = useState([])
    useEffect( 
        () => {      
        getApi
        .get(`/skills?filters[name][$contains]=${text}`)
        .then((response) => {
        setData(response.data.data)
        })
        .catch((error) => {
        console.log(error);
        });
            }, [text]
        )
    
    return data
}