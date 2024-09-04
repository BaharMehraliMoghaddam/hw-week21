import { httpService } from "../Serviecs/InstanceAxios"


export default async function deleteCourses(id){
    try{
         const res = await httpService.delete(`/api/course-list/${id}/`)
        //  console.log(res)
         return res
    }catch(e){
        console.log(e.message)
    }
}