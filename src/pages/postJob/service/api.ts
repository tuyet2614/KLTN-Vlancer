import { useEffect, useState } from "react";
import getApi from "../../../constant/http-common";
export const addNewPost = (data: any) => {
    getApi.post('/posts', {
        "title": data.title,
        "deadline": data.deadline,
        "category": data.category,
        "service": data.service,
        "skill": data.skill,
        "description": data.description
        })
        .then( (response) =>  {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}