import { useQuery } from "@tanstack/react-query";
import getOneCourseApi from "../api/getOneCourseApi";


export default function useGetOneCourse(id) {
  return useQuery({
    queryKey:["oneCourse"],
    queryFn:()=>getOneCourseApi(id),
    enabled: !!id
  })
}
//------------------------------------*****************************************