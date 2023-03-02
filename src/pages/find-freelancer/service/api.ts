import { useEffect, useState } from "react"
import getApi from "../../../constant/http-common";

export const getListFreelancer = () => {
    const [data, setData] = useState([])
    useEffect (() => {
        getApi.get('/users?filters[$and][0][role][name][$eq]=Freelancer&&populate=*').then(
            (response) => {
                setData(response.data)
                // response.data.map(item => {item.})
                console.log("user: ", response)
            }
        ).catch((error) => {
        console.log(error);
        });
    }, [])
    return data
}