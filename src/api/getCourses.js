import { httpService } from "../Serviecs/InstanceAxios";


export default async function getCourses({page=1,checked="",search=""}){
    // console.log(page)
    try{
         const res = await httpService.get(`/api/course-list/?page=${page}&limit=5&category=${checked}${search ? `&q=${search}`:""}`)
        //  console.log(res)
         return res
    }catch(e){
        console.log(e.message)
    }
}