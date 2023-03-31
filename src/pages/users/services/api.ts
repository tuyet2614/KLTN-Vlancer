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

export const updateUser = async(id: any, data:any, handleDetailUser?: () => void, setLoading?: any) => {
    await authApi.put(`/users/${id}`, data)
        .then( (response) =>  {
            Notification.Success({ message: "Cập nhập người dùng thành công" })
            handleDetailUser && handleDetailUser()
            setLoading(false)
        })
        .catch((error) => {
            console.log(error.response);
        });
}

export const createProfile = async(userId:any, data:any, dataProfile: any , setLoading?: any) => {
    let profile:any = []
    await authApi.post('/profiles', {data})
        .then( (response) =>  {
            dataProfile.map((item:any) => {
                profile.push(item.id)
            })
            profile.push(response.data.data.id)
            
            const dataput = {profile}

            updateUser(userId, dataput, setLoading )
        })
        .catch((error) => {
            console.log(error.response);
        });
}


export const getDetailProfile = (id: any) => {
    console.log("iddddd:", id);
    
    const [data, setData] = useState<any>()
    const [isLoading, setIsLoading]  = useState(true)
    useEffect(() => 
   { authApi.get(`/profiles/${id}?populate=deep,3`).then((respon) => {
        setData(respon?.data?.data)
        setIsLoading(false)
    }).catch ((error) =>{
        console.log(error);
        setIsLoading(false)
    })}, [id])
    return {data, isLoading}
}

export const updateProfile = (data:any, profileId: any , setLoading?: any, ) => {
    
    authApi.put(`/profiles/${profileId}`, {data})
        .then( (response) =>  {
            console.log("resoooo: ", response);
            setLoading(false)
            
        })
        .catch((error) => {
            console.log(error.response);
        });
}
