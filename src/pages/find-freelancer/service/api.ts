import axios from "axios";
import { useEffect, useState } from "react"
import getApi from "../../../constant/http-common";

//&pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}

export const getListFreelancer = (pagination?: any, params?: any) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const hasPagination = `/users?filters[$and][0][role][name][$eq]=Freelancer&populate=*&start=${pagination.page}&limit=${pagination.pageSize}`
    
    useEffect (() => {
       axios.get( hasPagination, {params: params}).then(
            (response) => {
                
                setData(response.data)
                setIsLoading(false)
            }
        ).catch((error) => {
        console.log(error);
        setIsLoading(false)
        })
    }, [pagination, params])
    return {data, isLoading}
}

export const getListFreelancerNoPag = ( params?: any) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    
    useEffect (() => {
        axios.get( '/users?filters[$and][0][role][name][$eq]=Freelancer&populate=*', {params: params}).then(
            (response) => {
                
                setData(response.data)
                setIsLoading(false)
            }
        ).catch((error) => {
        console.log(error);
        setIsLoading(false)
        })
    }, [params])
    return {data, isLoading}
}
