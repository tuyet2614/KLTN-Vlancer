import axios from "axios";
import { useEffect, useState } from "react"
import getApi from "../../../constant/http-common";

//&pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}

export const getListFreelancer = (pagination?: any, params?: any) => {
    const [data, setData] = useState([])
    useEffect (() => {
        axios.get(`/users?filters[$and][0][role][name][$eq]=Freelancer&populate=*&start=${pagination.page}&limit=${pagination.pageSize}`, {params: params}).then(
            (response) => {
                
                setData(response.data)
            }
        ).catch((error) => {
        console.log(error);
        });
    }, [pagination, params])
    return data
}
