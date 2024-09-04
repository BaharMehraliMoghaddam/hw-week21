import { useMutation } from "@tanstack/react-query";
import addCourse from "../api/addCourse";




export default function useAddCourse() {
  return useMutation({
    mutationKey:"add",
    mutationFn:(newCourse)=>addCourse(newCourse)
  })
}


