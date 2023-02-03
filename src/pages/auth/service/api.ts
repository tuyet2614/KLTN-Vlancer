import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import login from '../../../constant/http-common'

export const useLoginApi = (user: string, pass: string) => {
    // const navigate = useNavigate()
    
    login.post('/auth/local', {
        "identifier": user,
        "password": pass
        })
        .then( (response) =>  {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    

}