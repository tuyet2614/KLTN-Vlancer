import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import authApi from "../../../constant/http-auth-common";
import getApi from "../../../constant/http-common";
import { systemRoutes } from "../../../routes";
import emailjs from "emailjs-com";
import { getMyUser } from "../../auth/service/api";

export const createTest = (data: any, navigate:NavigateFunction, dataUser:any) => {
    
    const serviceId = "service_0tk8c3m";
  const templateId = "template_z4ks1lu";
  const userId = "wjIzS7aYtLZY1jAJ-";
    
    authApi.post('/tests', {data})
        .then( (response) =>  {
            emailjs.send(
          serviceId,
          templateId,
          {
            name: dataUser?.user?.username,
            email: dataUser?.user?.email,
            message: `Tôi muốn tạo cuộc thi này để tìm các mẫu thiết kế phù hợp \n Thông tin chi tiết của cuộc thi có thể xem tại đây:`,
            link: `
          <a href="http://localhost:3000/request-detail-job/${response?.data?.data?.id}/tests">xem chi tiết</a>
        `,
          },
          userId
        );
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
