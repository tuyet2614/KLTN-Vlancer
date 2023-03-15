import authApi from "../../../constant/http-auth-common";
import getApi from "../../../constant/http-common";

export const createTest = async(data: any, routeDetailTest:() => void) => {
    await authApi.post('/tests', {data})
        .then( (response) =>  {
            
            routeDetailTest()
        })
        .catch((error) => {
            console.log(error.response);
        });
}