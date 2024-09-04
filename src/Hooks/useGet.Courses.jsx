import { useQuery } from "@tanstack/react-query";
import getCourses from "../api/getCourses";

export default function useGetCourses({page,checked,search}) {
  return useQuery({
    queryKey:["courses"],
    queryFn:()=>getCourses({page,checked,search})
  })
}
