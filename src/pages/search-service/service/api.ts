import authApi from "../../../constant/http-auth-common";
export const addNewService = async(data: any, routeListService:() => void) => {
    
   await authApi.post('//self-services', {data})
        .then( (response) =>  {
            
            routeListService()
        })
        .catch((error) => {
            console.log(error.response);
        });
}