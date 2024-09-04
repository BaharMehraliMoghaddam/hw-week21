import { useMutation } from "@tanstack/react-query";
import editCourse from "../api/editCourse";


export default function useEditCourse() {
  return useMutation({
    mutationKey:["edit"],
    mutationFn:({id,editedCourse})=>editCourse({id,editedCourse})
  })
}
