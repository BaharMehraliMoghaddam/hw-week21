import { httpService } from "../Serviecs/InstanceAxios";


export default async function editCourse({id,editedCourse}) {
    try{
        const res = await httpService.put(`/api/course-list/${id}/`,editedCourse)
    }catch(e){
        console.log(e.message)
    }
}
