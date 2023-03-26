import { useEffect, useState } from "react";
import getApi from "../../../constant/http-common"
import authApi from "../../../constant/http-auth-common"
import Notification from "../../../components/base/components/Notification";
import { useTranslation } from "react-i18next";

export const getDetailUser = (id?: string) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect( 
        () => {      
        getApi
        .get(`/users/${id}?populate=*`)
        .then((response) => {
            setIsLoading(false)
        setData(response.data)
        })
        .catch((error) => {
            setIsLoading(false)
        console.log(error);
        });
            }, []
        )
    
    return {data, isLoading}
}

export const updateUser = async(id: any, data:any, handleDetailUser?: () => void) => {
    await authApi.put(`/users/${id}`, data)
        .then( (response) =>  {
            Notification.Success({ message: "Cập nhập người dùng thành công" })
            handleDetailUser && handleDetailUser()
        })
        .catch((error) => {
            console.log(error.response);
        });
}

export const createProfile = async(userId:any, data:any, dataProfile: any) => {
    let profile:any = []
    await authApi.post('profiles', {data})
        .then( (response) =>  {
            dataProfile.map((item:any) => {
                profile.push(item.id)
            })
            profile.push(response.data.data.id)
            
            const dataput = {profile}

            updateUser(userId, dataput )
        })
        .catch((error) => {
            console.log(error.response);
        });
}
