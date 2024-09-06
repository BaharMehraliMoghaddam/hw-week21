import { addCourseURL } from "../Constants/ValuesConstant"
import { httpService } from "../serviecs/InstanceAxios"



export default async function addCourse(newCourse) {
    try{
      const res = await httpService.post(addCourseURL,newCourse)
      return res
    } catch(e){
      console.log(e.message)
    }
  }
  