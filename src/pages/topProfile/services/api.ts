import axios from "axios"
import { useEffect, useState } from "react"

export const getListProfiles = (pagination?: any, params?: any) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    
    
    useEffect (() => {
       axios.get('/profiles?populate=*', {params: params}).then(
            (response) => {
                
                setData(response.data?.data)
                setIsLoading(false)
            }
        ).catch((error) => {
        console.log(error);
        setIsLoading(false)
        })
    }, [pagination, params])
    return {data, isLoading}
}