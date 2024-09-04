import { httpService } from "../Serviecs/InstanceAxios";

export default async function getOneCourseApi(id) {
    // console.log(id)
  try {
    const res = await httpService.get(`/api/course-list/${id}/`);
    return res.data
  } catch (e) {
    console.log(e.message);
  }
}