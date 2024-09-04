import { useMutation } from "@tanstack/react-query";
import deleteCourses from "../api/deleteCourses";


export default function useDeleteCourses() {
  return useMutation({
    mutationKey:"delete",
    mutationFn:(id)=>deleteCourses(id)
  })
}
