import { httpService } from "../serviecs/InstanceAxios";


export default async function editCourse({id,editedCourse}) {
    try{
        const res = await httpService.put(`/api/course-list/${id}/`,editedCourse)
    }catch(e){
        console.log(e.message)
    }
}
